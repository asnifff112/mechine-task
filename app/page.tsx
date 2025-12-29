"use client"

import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three"

function Box(){
  const meshRef= useRef<THREE.Mesh>(null!)

  useFrame((_, delta) => {
    meshRef.current.rotation.y += delta;
    meshRef.current.rotation.x += delta * 0.5;
  });
}