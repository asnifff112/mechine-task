"use client"

import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three"
import React from 'react'

function Box(){
  const meshRef= useRef<THREE.Mesh>(null!)

  useFrame((_, delta) => {
    meshRef.current.rotation.y += delta;
    meshRef.current.rotation.x += delta * 0.5;
  });

  return (
    <mesh ref={meshRef} castShadow receiveShadow>
      <sphereGeometry args={[1,32,32]}/>
      <meshStandardMaterial color="blue"/>
    </mesh>
  )
}

export default function Home (){
 return(
 <main className="w-screen h-screen">

   <Canvas
     shadows
     camera={{position:[3,3,6], fov :50}}   
   >
    <ambientLight intensity={0.5}/>
    <directionalLight
     position={[5,5,5]}
     intensity={1}
     castShadow
    />
   </Canvas>

 </main>
 )
}