"use client";

import { useRef } from "react";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";

import { useFrame, useLoader } from "@react-three/fiber";

export function Crystal() {
  const myModel = useLoader(GLTFLoader, `/magic_crystals.glb`);
  const ref = useRef();
  const scaleValue = 0.084;
  const positionY = -1.5;
  useFrame((state, delta) => (ref.current.rotation.y += delta / 2));
  return (
    <primitive
      object={myModel.scene}
      ref={ref}
      position={[0, positionY, 0]} // Moving the model down along the y-axis
      scale={[scaleValue, scaleValue, scaleValue]} // Applying uniform scaling
    />
  );
}
