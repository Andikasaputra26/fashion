import React from "react";
import Image from "next/image";

import { MoveRight } from "lucide-react";
import ImageCard from "./ImageCard";

export default function Favorite() {
  const favorite = [
    {
      id: 1,
      img: "/img/two.png",
      title: "Trending on Instagram",
      description: "Explore Now!",
    },
    {
      id: 2,
      img: "/img/one.png",
      title: "All Under $40",
      description: "Explore Now!",
    },
  ];
  return (
    <div className="container mx-auto p-10">
      {/* Title Section */}
      <h1 className="text-4xl font-bold text-center mt-4 border-2 border-border text-black bg-white p-4 rounded-md shadow-lg tracking-wide rotate-3 mx-auto max-w-xs md:max-w-md">
        Young's Favorite
      </h1>

      {/* Images Section */}
      <div className="container mx-auto py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {favorite.map((item) => (
            <ImageCard key={item.id} imageUrl={item.img}>
              <div className="relative p-6">
                <h3 className="text-xl font-bold mt-4">{item.title}</h3>

                <span className="text-black">Explore Now!</span>

                <div className="absolute bottom-6 right-6 text-gray-500">
                  <MoveRight />
                </div>
              </div>
            </ImageCard>
          ))}
        </div>
      </div>
    </div>
  );
}
