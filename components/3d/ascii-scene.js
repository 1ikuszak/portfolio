"use client";

import { AsciiRenderer } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

export function AsciiScene({
  children,
  bgColor = "#FFFFFF",
  fgColor = "#000000",
  lightIntensity = 10000,
}) {
  return (
    <Canvas className="canvas z-0 rounded-md">
      <spotLight
        position={[10, 10, 10]}
        angle={0.15}
        penumbra={1}
        intensity={lightIntensity}
      />
      <pointLight position={[-10, -10, -10]} intensity={lightIntensity} />
      {children}
      <AsciiRenderer invert={false} fgColor={fgColor} bgColor={bgColor} />
    </Canvas>
  );
}
