"use client";

import React from "react";
import { Bounded } from "@/components/Bounded";
import SkyDiveScene from "@/components/SkyDiveScene";
import { View } from "@react-three/drei";

type Props = {};

const Skydive = (props: Props) => {
  return (
    <Bounded className="skydive h-screen">
      <h2 className="sr-only"></h2>
      <View className="h-screen w-screen">
        <SkyDiveScene sentence={"dive into better health"} />
      </View>
    </Bounded>
  );
};

export default Skydive;
