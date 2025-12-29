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

}