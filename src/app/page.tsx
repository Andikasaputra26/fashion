"use client";

import Favorite from "@/components/Favorite";
import BrandsSection from "./BrandSection/page";
import Hero from "./Hero/page";
import Card from "@/components/Card";

export default function Home() {
  return (
    <div className="max-h-screen">
      <Hero />
      <BrandsSection />
      <Card />
      <Favorite />
    </div>
  );
}
