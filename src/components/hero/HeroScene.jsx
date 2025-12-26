import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Stars, Float, PerspectiveCamera } from '@react-three/drei';
import { EffectComposer, Bloom, Noise, Vignette } from '@react-three/postprocessing';
import * as THREE from 'three';

const ParticleField = () => {
    const count = 2000;
    const mesh = useRef();
    const light = useRef();

    // Store original positions to return to
    const [positions, originalPositions] = useMemo(() => {
        const pos = new Float32Array(count * 3);
        const orig = new Float32Array(count * 3);
        for (let i = 0; i < count; i++) {
            const x = (Math.random() - 0.5) * 25;
            const y = (Math.random() - 0.5) * 25;
            const z = (Math.random() - 0.5) * 15;
            pos[i * 3] = x;
            pos[i * 3 + 1] = y;
            pos[i * 3 + 2] = z;
            orig[i * 3] = x;
            orig[i * 3 + 1] = y;
            orig[i * 3 + 2] = z;
        }
        return [pos, orig];
    }, [count]);

    useFrame((state) => {
        if (!mesh.current) return;

        // Mouse position in 3D space (mapped roughly to our scene depth)
        const mouseX = state.pointer.x * 12; // Scale up to match scene width
        const mouseY = state.pointer.y * 12;

        const positionsArray = mesh.current.geometry.attributes.position.array;

        for (let i = 0; i < count; i++) {
            const i3 = i * 3;
            const px = positionsArray[i3];
            const py = positionsArray[i3 + 1];
            const pz = positionsArray[i3 + 2];

            const ox = originalPositions[i3];
            const oy = originalPositions[i3 + 1];
            const oz = originalPositions[i3 + 2];

            // Calculate distance to mouse
            const dx = mouseX - px;
            const dy = mouseY - py;

            // Interaction radius
            const distSq = dx * dx + dy * dy;
            const force = Math.max(0, (150 - distSq) / 150); // Stronger when closer

            if (force > 0) {
                // Attract towards mouse
                positionsArray[i3] += dx * force * 0.03;
                positionsArray[i3 + 1] += dy * force * 0.03;
            } else {
                // Return to original position slowly
                positionsArray[i3] += (ox - px) * 0.02;
                positionsArray[i3 + 1] += (oy - py) * 0.02;
                positionsArray[i3 + 2] += (oz - pz) * 0.02;
            }
        }

        mesh.current.geometry.attributes.position.needsUpdate = true;

        // Gentle rotation
        mesh.current.rotation.y = state.clock.elapsedTime * 0.05;
    });

    return (
        <points ref={mesh}>
            <bufferGeometry>
                <bufferAttribute
                    attach="attributes-position"
                    count={positions.length / 3}
                    array={positions}
                    itemSize={3}
                />
            </bufferGeometry>
            <pointsMaterial
                size={0.04}
                color="#8fd2ff"
                transparent
                opacity={0.9}
                sizeAttenuation
                depthWrite={false}
                blending={THREE.AdditiveBlending}
            />
        </points>
    );
};

// Enhanced CameraRig for Parallax and Tilt
function CameraRig({ children }) {
    const group = useRef();

    useFrame((state, delta) => {
        // Cursor position (-1 to 1)
        const x = state.pointer.x;
        const y = state.pointer.y;

        // Smoothly interpolate camera position for parallax (Opposite direction of cursor)
        state.camera.position.x = THREE.MathUtils.lerp(state.camera.position.x, -x * 2, 0.05);
        state.camera.position.y = THREE.MathUtils.lerp(state.camera.position.y, -y * 2, 0.05);
        state.camera.lookAt(0, 0, 0);

        // Tilt and Rotate the group based on cursor
        if (group.current) {
            // Rotate slightly towards cursor
            group.current.rotation.y = THREE.MathUtils.lerp(group.current.rotation.y, x * 0.5, 0.05); // Y-axis rotation (left/right)
            group.current.rotation.x = THREE.MathUtils.lerp(group.current.rotation.x, -y * 0.5, 0.05); // X-axis rotation (up/down)

            // Shift depth slightly
            group.current.position.z = THREE.MathUtils.lerp(group.current.position.z, y * 0.5, 0.05);
        }
    });

    return <group ref={group}>{children}</group>;
}

const HeroScene = () => {
    return (
        <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            zIndex: 0,
            pointerEvents: 'none' // Allow clicks to pass through to buttons
        }}>
            <Canvas
                gl={{ antialias: false, alpha: true }}
                dpr={[1, 1.5]}
                eventSource={document.getElementById('root')} // Listen to global events for parallax
                eventPrefix="client"
            >
                <PerspectiveCamera makeDefault position={[0, 0, 8]} fov={45} />
                <color attach="background" args={['#030713']} />

                {/* Lighting */}
                <ambientLight intensity={0.6} color="#304b6f" />
                <directionalLight
                    position={[4, 6, 6]}
                    intensity={1.2}
                    color="#7fd0ff"
                />
                <directionalLight
                    position={[-3, 1, -4]}
                    intensity={0.9}
                    color="#9b7dff"
                />

                {/* Objects */}
                <CameraRig>
                    <Float speed={2} rotationIntensity={1} floatIntensity={0.5}>
                        <ParticleField />
                    </Float>
                </CameraRig>

                <Stars radius={100} depth={50} count={3000} factor={4} saturation={0} fade speed={1} />

                {/* Post Processing */}
                <EffectComposer disableNormalPass>
                    <Bloom
                        luminanceThreshold={0.2}
                        mipmapBlur
                        intensity={0.5}
                        radius={0.5}
                    />
                    <Noise opacity={0.05} />
                    <Vignette eskil={false} offset={0.1} darkness={1.1} />
                </EffectComposer>
            </Canvas>
        </div>
    );
};

export default HeroScene;
