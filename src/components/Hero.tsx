"use client";
import React from "react";
import Image from "next/image";
import allCans from "./../../public/assets/all-cans-bunched.png";
import { Bounded } from "@/components/Bounded";
import Button from "@/components/Button";
import { TextSplitter } from "@/components/TextSplitter";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import { View } from "@react-three/drei";
import Scene from "./Scene";
import { Bubbles } from "./Bubbles";
import { useStore } from "@/hooks/useStore";
import { useMediaQuery } from "../hooks/useMediaQuery";

gsap.registerPlugin(useGSAP, ScrollTrigger);

type Props = {};

const Hero = (props: Props) => {
  const ready = useStore((state) => state.ready);
  const isDesktop = useMediaQuery("(min-width: 768px)", true);
  useGSAP(
    () => {
      if (!ready && isDesktop) return;

      const introTl = gsap.timeline();

      introTl
        .set(".hero", { opacity: 1 })
        .from(".hero-header-word", {
          scale: 3,
          opacity: 0,
          ease: "power4.in",
          delay: 0.3,
          stagger: 0.5,
        })
        .from(
          ".hero-subheading",
          {
            opacity: 0,
            y: 30,
            delay: 0.8,
          },
          "+=.3"
        )
        .from(".hero-body", {
          opacity: 0,
          y: 10,
        })
        .from(".hero-button", {
          opacity: 0,
          y: 10,
          duration: 0.6,
        });

      const scrollTl = gsap.timeline({
        scrollTrigger: {
          trigger: ".hero",
          start: "top top",
          end: "bottom bottom",
          scrub: 1.5,
        },
      });

      scrollTl
        .fromTo(
          "body",
          {
            backgroundColor: "#fde047",
          },
          {
            backgroundColor: "#d9f99d",
            overwrite: "auto",
          },
          1
        )
        .from(".text-side-heading .split-char", {
          scale: 1.3,
          y: 40,
          rotate: -25,
          opacity: 0,
          stagger: 0.1,
          ease: "back.out(3)",
          duration: 0.5,
        })
        .from(".text-side-body", {
          y: 20,
          opacity: 0,
        });
    },
    {
      dependencies: [ready, isDesktop],
    }
  );
  return (
    <Bounded className="hero opacity-0">
      {isDesktop && (
        <View className="hero-scene pointer-events-none sticky top-0 z-50 -mt-[100vh] hidden h-screen w-screen md:block">
          <Scene />
          <Bubbles count={300} speed={2} repeat={true} />
        </View>
      )}

      <div className="grid">
        <div className="grid h-screen place-items-center">
          <div className="grid auto-rows-min place-items-center text-center">
            <h1 className="hero-header lg:text-[13rem] text-7xl font-black uppercase leading-[0.8] text-orange-500 md:text-[9rem]">
              <TextSplitter
                text="Live Gutsy"
                className="hero-header-word"
                wordDisplayStyle="block"
              />
            </h1>
            <div className="hero-subheading mt-12 text-5xl font-semibold text-sky-950 lg:text-6xl">
              Soda Perfected
            </div>
            <div className="hero-body text-2xl font-normal text-sky-950 mt-1 mb-3">
              3-5g of sugar, 9g fiber, 5 delicious flavors
            </div>
            <Button
              buttonLink="/"
              buttonText={"Shop Now"}
              className="hero-button"
            />
          </div>
        </div>
        <div className="grid text-side relative z-[80] h-screen items-center gap-4 md:grid-cols-2">
          <div className="w-full md:hidden">
            <Image src={allCans} alt="Image showing all cans" />
          </div>
          <div>
            <div className="text-side-heading text-balance text-6xl font-black uppercase text-sky-950 lg:text-8xl">
              <TextSplitter text="Try all five flavors" />
            </div>
            <div className="text-side-body mt-4 max-w-xl text-balance text-xl font-normal text-sky-950">
              Our soda is made with real fruit juice and a touch of cane sugar.
              We never use artificial sweeteners or high fructose corn syrup.
              Try all five flavors and find your favorite.
            </div>
          </div>
        </div>
      </div>
    </Bounded>
  );
};

export default Hero;
