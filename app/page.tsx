"use client"

import { Canvas, useFrame } from "@react-three/fiber";
import { useRef } from "react";
import gsap from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger";
import * as THREE from "three"
import React from 'react'
import { OrbitControls } from "@react-three/drei";

gsap.registerPlugin(ScrollTrigger)


  const meshRef = useRef<THREE.Mesh> (null!)
  useFrame(() =>{
    meshRef.current.rotation.y 
    meshRef.current.rotation.x * 1.5
  })

 


export default function page() {


  return (
    <main className="w-screen h-screen">
    <Canvas
    >

        <mesh ref={[meshRef]}>
          <meshStandardMaterial 
          color="blue"/>
          <boxGeometry 
          args={[1,1,0]} />
        </mesh>

          <mesh ref={[meshRef]}>
          <meshStandardMaterial 
          color="red"/>
          <sphereGeometry
          args={[32,32,1]} />
        </mesh>

        

    <ambientLight/>
    <spotLight/>
    <OrbitControls/>
    </Canvas>
    </main>
  )
}
