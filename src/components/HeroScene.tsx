import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, MeshDistortMaterial, Sparkles, Stars, Torus, Icosahedron, Octahedron } from '@react-three/drei';
import type { Group, Mesh } from 'three';

function Core() {
  const shell = useRef<Mesh>(null);

  useFrame((_, delta) => {
    if (!shell.current) return;
    shell.current.rotation.y += delta * 0.15;
    shell.current.rotation.x += delta * 0.05;
  });

  return (
    <group>
      {/* glowing "neural" core */}
      <Icosahedron args={[1.15, 16]}>
        <MeshDistortMaterial color="#6d28d9" emissive="#1e1b4b" emissiveIntensity={0.6} roughness={0.2} metalness={0.85} distort={0.42} speed={1.8} />
      </Icosahedron>
      {/* wireframe network shell */}
      <Icosahedron ref={shell} args={[1.75, 2]}>
        <meshBasicMaterial color="#67e8f9" wireframe transparent opacity={0.18} />
      </Icosahedron>
      {/* glass ring */}
      <Float speed={1.4} rotationIntensity={0.6} floatIntensity={0.4}>
        <Torus args={[2.35, 0.06, 32, 160]} rotation={[Math.PI / 2.4, 0.2, 0]}>
          <meshStandardMaterial color="#f0abfc" emissive="#c026d3" emissiveIntensity={0.9} metalness={0.8} roughness={0.2} />
        </Torus>
      </Float>
    </group>
  );
}

function Satellite({ position, color, scale = 0.35 }: { position: [number, number, number]; color: string; scale?: number }) {
  return (
    <Float speed={2} rotationIntensity={1.5} floatIntensity={1.8}>
      <Octahedron args={[scale, 0]} position={position}>
        <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.45} metalness={0.7} roughness={0.15} flatShading />
      </Octahedron>
    </Float>
  );
}

// Eases the whole scene toward the pointer for a parallax / depth feel.
function Rig({ children }: { children: React.ReactNode }) {
  const group = useRef<Group>(null);
  useFrame(({ pointer }, delta) => {
    if (!group.current) return;
    group.current.rotation.y += (pointer.x * 0.35 - group.current.rotation.y) * Math.min(1, delta * 2);
    group.current.rotation.x += (-pointer.y * 0.2 - group.current.rotation.x) * Math.min(1, delta * 2);
  });
  return <group ref={group}>{children}</group>;
}

export default function HeroScene() {
  return (
    <Canvas camera={{ position: [0, 0, 6.5], fov: 45 }} dpr={[1, 1.75]} gl={{ antialias: true, alpha: true }}>
      <ambientLight intensity={0.25} />
      <hemisphereLight args={["#67e8f9", "#7c3aed", 0.6]} />
      <pointLight position={[4, 4, 4]} intensity={60} color="#22d3ee" />
      <pointLight position={[-4, -2, 3]} intensity={50} color="#a855f7" />
      <directionalLight position={[0, 5, 5]} intensity={1.2} />
      <Rig>
        <Core />
        <Satellite position={[2.9, 1.3, -0.5]} color="#67e8f9" />
        <Satellite position={[-2.7, -1.4, 0.3]} color="#c4b5fd" scale={0.28} />
        <Satellite position={[-2.2, 1.8, -1]} color="#f0abfc" scale={0.22} />
        <Sparkles count={70} scale={[8, 6, 4]} size={2.2} speed={0.4} color="#a5f3fc" />
      </Rig>
      <Stars radius={60} depth={40} count={2200} factor={3} saturation={0} fade speed={0.6} />
    </Canvas>
  );
}
