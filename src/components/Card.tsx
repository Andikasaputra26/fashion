"use client";

import React from "react";
import Image from "next/image";
import ImageCard from "./ImageCard";

import { motion } from "framer-motion";

export default function Card() {
  return (
    <>
      <div className="container mx-auto mt-10">
        <h1 className="text-4xl font-bold text-center mb-10">NEW ARRIVALS</h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 p-10">
          {/* Card 1 */}
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className=""
          >
            <ImageCard imageUrl="/img/hoodie.svg">
              <div className="p-4">
                <h2 className="text-xl font-semibold">Hoodies & Sweatshirt</h2>
                <p className="mt-2">Explore Now!</p>
              </div>
            </ImageCard>
          </motion.div>

          {/* Card 2 */}
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <ImageCard imageUrl="/img/parkas.svg">
              <div className="p-4">
                <h2 className="text-xl font-semibold">Coats & Parkas</h2>
                <p className="mt-2">Explore Now!</p>
              </div>
            </ImageCard>
          </motion.div>

          {/* Card 3 */}
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className=""
          >
            <ImageCard imageUrl="/img/tees.png">
              <div className="p-4">
                <h2 className="text-xl font-semibold">Tees & T-Shirt</h2>
                <p className="mt-2">Explore Now!</p>
              </div>
            </ImageCard>
          </motion.div>
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
