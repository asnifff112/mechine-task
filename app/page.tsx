"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";
import { Model } from "./model.js"



function Rotation() {
  const boxRef = useRef<THREE.Mesh>(null!);
  const sphereRef = useRef<THREE.Mesh>(null!);
  

  useFrame((_, delta) => {
    boxRef.current.rotation.y += delta;
    boxRef.current.rotation.x += delta * 0.5;

    sphereRef.current.rotation.y += delta;
    sphereRef.current.rotation.x += delta * 0.5;

  });

  return (
    <group>
     
      <mesh position={[-1.2, 0, 0]} ref={boxRef}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color="orange" />
      </mesh>

     
      <mesh position={[1.2, 0, 0]} ref={sphereRef}>
        <sphereGeometry args={[0.6, 32, 32]} />
        <meshStandardMaterial color="skyblue" />
      </mesh>

  
    </group>
  );
}

export default function Home() {
  return (
    <main className="w-screen h-screen">
      <Canvas camera={{ position: [3, 3, 6], fov: 50 }}>
        <ambientLight intensity={0.4} />
        <directionalLight position={[5, 5, 5]} intensity={1} />
        
        <Model />
        
        <Rotation />
        <OrbitControls />
      </Canvas>
    </main>
  );
}
