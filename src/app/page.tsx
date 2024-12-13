import Image from "next/image";
import Hero from "@/components/Hero";
import Skydive from "@/components/Skydive";
import Carousel from "@/components/Carousel";
import AlternatingText from "@/components/AlternatingText";
import BigText from "@/components/BigText";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Hero />
      <Skydive />
      <Carousel />
      <AlternatingText />
      <BigText />
      <Footer />
    </>
  );
}
