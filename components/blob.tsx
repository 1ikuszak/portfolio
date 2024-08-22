"use client";

import * as THREE from "three";
import React, { useRef } from "react";
import { ThreeElements } from "@react-three/fiber";
import { MeshDistortMaterial } from "@react-three/drei";

export function Blob(props: ThreeElements["mesh"]) {
  const meshRef = useRef<THREE.Mesh>(null!);
  return (
    <mesh {...props} ref={meshRef} scale={2}>
      <sphereGeometry args={[1, 64, 64]} />
      <MeshDistortMaterial
        color="white"
        distort={0.6}
        speed={6}
        roughness={2}
        metalness={0}
      />
    </mesh>
  );
}
