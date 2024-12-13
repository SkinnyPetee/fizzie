"use client";
import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { View } from "@react-three/drei";
// import { Perf } from "r3f-perf";
import dynamic from "next/dynamic";

const Loader = dynamic(
  () => import("@react-three/drei").then((mod) => mod.Loader),
  {
    ssr: false,
  }
);

type Props = {};

const ViewCanvas = (props: Props) => {
  return (
    <>
      <Canvas
        style={{
          position: "fixed",
          top: 0,
          left: "50%",
          transform: "translateX(-50%)",
          overflow: "hidden",
          pointerEvents: "none",
          zIndex: 30,
        }}
        shadows
        dpr={[1, 1.5]}
        gl={{ antialias: true }}
        camera={{
          fov: 30,
        }}
      >
        <Suspense fallback={null}>
          <View.Port />
        </Suspense>

        {/* <Perf /> */}
      </Canvas>
      <Loader />
    </>
  );
};

export default ViewCanvas;
