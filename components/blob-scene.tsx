"use client";

import { Canvas } from "@react-three/fiber";
import { Blob } from "./blob";

export function BlobScene() {
  return (
    <Canvas>
      <ambientLight intensity={Math.PI / 2} />
      <spotLight
        position={[10, 10, 10]}
        angle={0.15}
        penumbra={1}
        decay={0}
        intensity={Math.PI}
      />
      <pointLight position={[-10, -10, -10]} decay={1} intensity={Math.PI} />
      <Blob position={[0, 0, 0]} />
    </Canvas>
  );
}
