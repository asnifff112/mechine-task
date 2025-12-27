"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

/* 🔹 Rotating Box Component */
function Box() {
  const meshRef = useRef<THREE.Mesh>(null!);

  useFrame((_, delta) => {
    meshRef.current.rotation.y += delta;
    meshRef.current.rotation.x += delta * 0.5;
  });

  return (
    <mesh ref={meshRef} castShadow receiveShadow>
      <boxGeometry args={[1.5, 1.5, 1.5]} />
      <meshStandardMaterial color="#4f46e5" />
    </mesh>
  );
}

/* 🔹 Scene */
export default function Home() {
  return (
    <main className="w-screen h-screen">
      <Canvas
        shadows
        camera={{ position: [3, 3, 6], fov: 50 }}
      >
        {/* Lights */}
        <ambientLight intensity={0.4} />
        <directionalLight
          position={[5, 5, 5]}
          intensity={1}
          castShadow
        />

        {/* Object */}
        <Box />

        {/* Controls */}
        <OrbitControls enableZoom />

      </Canvas>
    </main>
  );
}
