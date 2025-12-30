"use client";

import { Canvas, useFrame,ThreeElement } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

function Rotation(){
  const groupRef = useRef<THREE.Group>(null!)
  const groupReff = useRef<THREE.Group>(null!)

  useFrame((_,delta)=>{
    groupRef.current.rotation.y += delta;
    groupRef.current.rotation.x += delta * 0.5
  })

   useFrame((_,delta)=>{
    groupReff.current.rotation.y += delta;
    groupReff.current.rotation.x += delta * 0.5
  })
  return(
     <group >
        
          <mesh position={[-1.2, 0, 0]} ref={groupRef}>
            <boxGeometry args={[1, 1, 1]} />
            <meshStandardMaterial color="orange" />
          </mesh>

        
          <mesh position={[1.2, 0, 0]} ref={groupReff}>
            <sphereGeometry args={[0.6, 32, 32]} />
            <meshStandardMaterial color="skyblue" />
          </mesh>
        </group>    
  )
}

export default function Home() {
  return (
    <main className="w-screen h-screen">
      <Canvas camera={{ position: [3, 3, 6], fov: 50 }}>
        <ambientLight intensity={0.4} />
        <directionalLight position={[5, 5, 5]} intensity={1} />
       <Rotation/>
       <OrbitControls />
       </Canvas>
    </main>
  );
}
