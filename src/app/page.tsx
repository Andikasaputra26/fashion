import BrandsSection from "./BrandSection/page";
import Hero from "./Hero/page";
import Card from "@/components/Card";

export default function Home() {
  return (
    <div className="maw-h-screen">
      <Hero />
      <BrandsSection />
      <Card />
    </div>
  );
}
