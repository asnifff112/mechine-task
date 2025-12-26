"useclient"

import { Canvas,useFrame } from "@react-three/fiber"
import { OrbitControls } from "@react-three/drei"
import { useRef } from "react"
import * as THREE from "three";

function box (){
    const meshref = useRef<THREE.Mesh>(null!);

    useFrame((_,delta) => {
        meshref.current.rotation.y +=delta
        meshref.current.rotation.x +=delta
    });
    return (
        <mesh ref={meshref} castShadow receiveShadow>
            <boxGeometry args={[1.5,1.5,1.5]}/>
            <meshStandardMaterial color="blue"/>
        </mesh>
    )
}

