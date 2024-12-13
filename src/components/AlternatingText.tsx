"use client";

import React from "react";
import { Bounded } from "./Bounded";
import { View } from "@react-three/drei";
import AltScene from "./AltScene";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import clsx from "clsx";

type Props = {};

const content = [
  {
    title: "Gut-Friendly Goodness",
    body: "Our soda is packed with prebiotics and 1 billion probiotics, giving your gut the love it deserves. Say goodbye to bloating and hello to a happy, healthy digestive system with every sip.",
  },
  {
    title: "Light Calories, Big Flavor",
    body: "Indulge in bold, refreshing taste without the guilt. At just 20 calories per can, you can enjoy all the flavor you crave with none of the compromise.",
  },
  {
    title: "Naturally Refreshing",
    body: "Made with only the best natural ingredients, our soda is free from artificial sweeteners and flavors. It’s a crisp, clean taste that feels as good as it tastes, giving you a boost of real, natural refreshment.",
  },
];

const AlternatingText = (props: Props) => {
  const isDesktop = useMediaQuery("(min-width: 768px)", true);
  return (
    <Bounded className="alternating-text-container relative text-sky-950 bg-yellow-300">
      <div>
        <div className="grid relative">
          <View className="alternating-text-view absolute left-0 top-0 h-screen w-full z-100">
            <AltScene />
          </View>
          {content.map((item, index) => (
            <div
              key={`${index} - ${item.title}`}
              className="alternating-section grid h-screen place-items-center gap-x-12 md:grid-cols-2 z-[5000]"
            >
              <div
                className={clsx(
                  index % 2 === 0 ? "col-start-1" : "md:col-start-2",

                  "rounded-lg p-4 backdrop-blur-lg max-md:bg-white/30 "
                )}
              >
                <h2 className="text-balance text-6xl font-bold">
                  {item.title}
                </h2>
                <p className="mt-4 text-xl">{item.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Bounded>
  );
};

export default AlternatingText;
