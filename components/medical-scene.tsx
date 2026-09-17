"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial, OrbitControls } from "@react-three/drei";
import { useRef } from "react";
import type { Group } from "three";

function MedicalCore() {
  const group = useRef<Group>(null);

  useFrame((state) => {
    if (!group.current) return;
    group.current.rotation.y = state.clock.elapsedTime * 0.35;
    group.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.7) * 0.4;
  });

  return (
    <group ref={group}>
      <Float speed={2.5} rotationIntensity={0.7} floatIntensity={1.2}>
        <mesh position={[0, 0, 0]}>
          <icosahedronGeometry args={[1.5, 1]} />
          <MeshDistortMaterial
            color="#67e8f9"
            emissive="#22d3ee"
            emissiveIntensity={0.7}
            roughness={0.2}
            metalness={0.4}
            distort={0.45}
            speed={2.3}
          />
        </mesh>
      </Float>

      <Float speed={2.1} rotationIntensity={0.8} floatIntensity={1.4}>
        <mesh position={[-2.2, 0.8, -1]}>
          <sphereGeometry args={[0.6, 32, 32]} />
          <meshStandardMaterial color="#dbeafe" emissive="#60a5fa" emissiveIntensity={0.7} />
        </mesh>
      </Float>

      <Float speed={2.7} rotationIntensity={1} floatIntensity={1.6}>
        <mesh position={[2.2, -0.9, -1.2]}>
          <torusKnotGeometry args={[0.9, 0.25, 160, 24]} />
          <meshStandardMaterial color="#a5f3fc" emissive="#38bdf8" emissiveIntensity={0.8} />
        </mesh>
      </Float>

      <Float speed={2.3} rotationIntensity={1.2} floatIntensity={1.1}>
        <mesh position={[0.5, 2.2, -1.5]}>
          <octahedronGeometry args={[0.9, 0]} />
          <meshStandardMaterial color="#e0f2fe" emissive="#67e8f9" emissiveIntensity={0.85} />
        </mesh>
      </Float>
    </group>
  );
}

export function MedicalScene() {
  return (
    <div className="h-[420px] w-full overflow-hidden rounded-[28px] border border-cyan-400/30 bg-[radial-gradient(circle_at_top,_rgba(34,211,238,0.18),_rgba(15,23,42,0.15)_35%,_rgba(2,6,23,0.9)_100%)] shadow-[0_35px_90px_rgba(14,165,233,0.2)]">
      <Canvas camera={{ position: [0, 0, 6], fov: 45 }}>
        <color attach="background" args={["#020b1a"]} />
        <ambientLight intensity={1.2} />
        <directionalLight position={[4, 5, 4]} intensity={2.2} color="#dbeafe" />
        <pointLight position={[-3, -2, 3]} intensity={18} color="#22d3ee" />
        <pointLight position={[3, 2, 1]} intensity={16} color="#60a5fa" />

        <MedicalCore />

        <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.7} />
      </Canvas>
    </div>
  );
}
