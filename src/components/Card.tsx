"use client";

import React from "react";
import ImageCard from "./ImageCard";

import { motion } from "framer-motion";

export default function Card() {
  const itemCard = [
    {
      id: 1,
      img: "/img/hoodie.svg",
      name: "Hoodies & Sweatshirt",
      description: "Explore Now!",
    },
    {
      id: 2,
      img: "/img/parkas.svg",
      name: "Coats & Parkas",
      description: "Explore Now!",
    },
    {
      id: 3,
      img: "/img/tees.png",
      name: "Tees & T-Shirt",
      description: "Explore Now!",
    },
  ];
  return (
    <>
      <div className="container mx-auto mt-10">
        <h1 className="text-4xl font-bold text-center mb-10">NEW ARRIVALS</h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 p-10">
          {itemCard.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className=""
            >
              <ImageCard imageUrl={item.img}>
                <div className="p-4">
                  <h2 className="text-xl font-semibold">{item.name}</h2>
                  <p className="mt-2">{item.description}</p>
                </div>
              </ImageCard>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="pt-12">
        <div className="bg-main max-w-full max-h-screen rounded-md">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-center justify-center mx-auto">
              {/* <Image
                src="/img/payday.png"
                width={800}
                height={968}
                alt=""
                className="object-cover"
              /> */}
            </div>
            <div className="">ss</div>
          </div>
        </div>
      </div>
    </>
  );
}
