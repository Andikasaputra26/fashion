import Button from "@/components/Button";
import Image from "next/image";

const HeroSection = () => {
  return (
    <div className="container z-10 mx-auto flex flex-col md:flex-row items-center px-6 py-10 rounded-[59px] bg-[#F4F6F5] mt-24 min-h-[500px]">
      <div className="flex-1">
        <div className="relative inline-block mb-4">
          <h1 className="text-6xl font-bold bg-white -rotate-3 inline-block w-auto px-4 py-2">
            LET'S
          </h1>
        </div>
        <h2 className="text-6xl font-bold">EXPLORE</h2>
        <h2 className="bg-yellow-400 inline-block px-2 font-bold text-6xl -rotate-3 my-2">
          UNIQUE
        </h2>
        <h2 className="font-bold text-6xl">CLOTHES.</h2>
        <p className="mt-4 text-2xl mb-6">
          Live for Influential and Innovative fashion!
        </p>
        <Button>
          <a className="inline-block  px-6  rounded-md text-lg">Shop Now</a>
        </Button>
      </div>

      <div className="flex-1 mt-6 md:mt-0 md:ml-10">
        <Image
          src="/img/hero.png"
          alt="Fashion Model"
          width={500}
          height={500}
          className="rounded-2xl object-cover"
        />
      </div>
    </div>
  );
};

export default HeroSection;
