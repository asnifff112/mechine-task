"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

export default function Home() {
  return (
    <main className="w-screen h-screen">
      <Canvas camera={{ position: [3, 3, 6], fov: 50 }}>
        <ambientLight intensity={0.4} />
        <directionalLight position={[5, 5, 5]} intensity={1} />

       
        <group>
        
          <mesh position={[-1.2, 0, 0]}>
            <boxGeometry args={[1, 1, 1]} />
            <meshStandardMaterial color="orange" />
          </mesh>

        
          <mesh position={[1.2, 0, 0]}>
            <sphereGeometry args={[0.6, 32, 32]} />
            <meshStandardMaterial color="skyblue" />
          </mesh>
        </group>

        <OrbitControls />
      </Canvas>
    </main>
  );
}
