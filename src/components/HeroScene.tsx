import { useMemo, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Sparkles } from '@react-three/drei';
import * as THREE from 'three';

const ACID = '#d4ff3a';
const SIGNAL = '#5ee6ff';
const LAYERS = [7, 12, 14, 12, 5];
const PULSES = 40;

type Net = { nodes: THREE.Vector3[]; edges: [number, number][] };

// Builds a layered feed-forward network laid out left→right, each layer a loose ring in 3D.
function buildNet(): Net {
  const nodes: THREE.Vector3[] = [];
  const layerIdx: number[][] = [];
  const spacing = 2.3;
  LAYERS.forEach((count, l) => {
    const x = (l - (LAYERS.length - 1) / 2) * spacing;
    const ids: number[] = [];
    for (let i = 0; i < count; i++) {
      const a = (i / count) * Math.PI * 2 + l * 0.6;
      const r = 1.1 + count * 0.12;
      nodes.push(new THREE.Vector3(x + Math.sin(i * 7.3) * 0.25, Math.cos(a) * r, Math.sin(a) * r * 0.8));
      ids.push(nodes.length - 1);
    }
    layerIdx.push(ids);
  });
  const edges: [number, number][] = [];
  for (let l = 0; l < layerIdx.length - 1; l++) {
    for (const a of layerIdx[l]) {
      for (const b of layerIdx[l + 1]) {
        // keep the graph readable: connect a deterministic ~45% of pairs
        if ((a * 31 + b * 17) % 100 < 45) edges.push([a, b]);
      }
    }
  }
  return { nodes, edges };
}

function Network() {
  const group = useRef<THREE.Group>(null);
  const pulsesRef = useRef<THREE.InstancedMesh>(null);
  const net = useMemo(buildNet, []);

  const lineGeo = useMemo(() => {
    const pos = new Float32Array(net.edges.length * 6);
    net.edges.forEach(([a, b], i) => {
      pos.set([net.nodes[a].x, net.nodes[a].y, net.nodes[a].z, net.nodes[b].x, net.nodes[b].y, net.nodes[b].z], i * 6);
    });
    const g = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.BufferAttribute(pos, 3));
    return g;
  }, [net]);

  const pulses = useMemo(
    () => Array.from({ length: PULSES }, () => ({ edge: Math.floor(Math.random() * net.edges.length), t: Math.random(), speed: 0.35 + Math.random() * 0.5 })),
    [net],
  );
  const tmp = useMemo(() => new THREE.Object3D(), []);

  useFrame(({ pointer }, delta) => {
    const g = group.current;
    if (g) {
      g.rotation.y += (pointer.x * 0.5 + Math.sin(performance.now() / 9000) * 0.35 - g.rotation.y) * Math.min(1, delta * 1.5);
      g.rotation.x += (-pointer.y * 0.25 - g.rotation.x) * Math.min(1, delta * 1.5);
    }
    const mesh = pulsesRef.current;
    if (!mesh) return;
    pulses.forEach((p, i) => {
      p.t += delta * p.speed;
      if (p.t >= 1) {
        // hop to an edge that starts where this one ended so signals flow forward through the net
        const end = net.edges[p.edge][1];
        const next = net.edges.filter((e) => e[0] === end);
        p.edge = next.length ? net.edges.indexOf(next[Math.floor(Math.random() * next.length)]) : Math.floor(Math.random() * net.edges.length);
        p.t = 0;
      }
      const [a, b] = net.edges[p.edge];
      tmp.position.lerpVectors(net.nodes[a], net.nodes[b], p.t);
      tmp.scale.setScalar(0.5 + Math.sin(p.t * Math.PI) * 0.8);
      tmp.updateMatrix();
      mesh.setMatrixAt(i, tmp.matrix);
    });
    mesh.instanceMatrix.needsUpdate = true;
  });

  return (
    <group ref={group}>
      <lineSegments geometry={lineGeo}>
        <lineBasicMaterial color={ACID} transparent opacity={0.1} />
      </lineSegments>
      {net.nodes.map((p, i) => (
        <mesh key={i} position={p}>
          <sphereGeometry args={[i % 5 === 0 ? 0.075 : 0.05, 12, 12]} />
          <meshBasicMaterial color={i % 5 === 0 ? SIGNAL : ACID} transparent opacity={0.85} />
        </mesh>
      ))}
      <instancedMesh ref={pulsesRef} args={[undefined, undefined, PULSES]}>
        <sphereGeometry args={[0.045, 8, 8]} />
        <meshBasicMaterial color="#ffffff" toneMapped={false} />
      </instancedMesh>
    </group>
  );
}

export default function HeroScene() {
  return (
    <Canvas camera={{ position: [0, 0, 9], fov: 50 }} dpr={[1, 1.75]} gl={{ antialias: true, alpha: true }}>
      <fog attach="fog" args={['#07080a', 7, 15]} />
      <Network />
      <Sparkles count={60} scale={[14, 8, 6]} size={1.6} speed={0.3} color={ACID} opacity={0.5} />
    </Canvas>
  );
}
