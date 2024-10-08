"use client";

import React from "react";
import ImageCard from "./ImageCard";
import Image from "next/image";
import { useState } from "react";

import { MoveDown } from "lucide-react";

import {
  motion,
  useMotionValue,
  useTransform,
  MotionStyle,
  useMotionValueEvent,
} from "framer-motion";

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

  const xDrag = useMotionValue(0);
  const [isFolded, setIsFolded] = useState(true);
  const xLeftSection = useTransform(xDrag, [0, 300], ["100%", "0%"]);
  const xRightSection = useTransform(xDrag, [0, 300], ["-100%", "0%"]);
  const centerScale = useTransform(xDrag, [150, 300], [0, 1]);
  const centerBrightness = useTransform(xDrag, [150, 300], [0.2, 1]);

  useMotionValueEvent(xDrag, "change", (currentX) => {
    if (currentX > 260) {
      setIsFolded(false);
    } else {
      setIsFolded(true);
    }
  });
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
              className="z-10"
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

      {/* <div className="pt-12">
        <div className="bg-main max-w-full max-h-screen rounded-md">
          <div className="flex items-center justify-center mx-auto p-6">
            <Image
              src="/img/woman.jpeg"
              width={800}
              height={968}
              alt=""
              className="object-cover rounded-lg"
            />
          </div>
        </div>
      </div> */}
      <div className="overflow-x-clip">
        <div className="flex-col">
          <h1 className="z-20 max-w-xs w-full text-center mt-4 bg-black text-white flex justify-center mx-auto p-4 hover:scale-95 duration-100 hover:-translate-y-4 rounded-md animate-bounce">
            Click Right is image and left is map
            <MoveDown className="bg-blue-200 rounded-full" />
          </h1>
        </div>
        <motion.div
          animate={isFolded ? "folded" : "open"}
          variants={{
            open: { scale: 1 },
            folded: { scale: 0.9 },
          }}
          initial="folded"
          className="relative flex flex-col items-center"
        >
          <motion.div
            variants={{ open: { rotate: 0 }, hovering: { rotate: 0 } }}
            whileHover="hovering"
            initial={{ rotate: 3 }}
            className="grid aspect-video max-h-[80vh] w-full min-w-[600px] p-8"
          >
            <div className="grid grid-cols-3 [grid-area:1/1]">
              <motion.div
                style={{ x: xLeftSection, skewY: "-1deg" }}
                className="map-image origin-bottom-right border-r border-[rgba(255,255,255,.1)] shadow-2xl"
              />
              <motion.div
                style={
                  {
                    scaleX: centerScale,
                    "--brightness": centerBrightness,
                  } as MotionStyle
                }
                className="map-image brightness-[--brightness]"
              />
              <motion.div
                style={{ x: xRightSection, skewY: "1deg" }}
                className="map-image origin-bottom-left border-l border-[rgba(255,255,255,.1)] shadow-2xl"
              />
            </div>
            <motion.div
              drag="x"
              _dragX={xDrag}
              dragConstraints={{ left: 0, right: 300 }}
              dragTransition={{
                modifyTarget: (target) => {
                  return target > 150 ? 300 : 0;
                },
                timeConstant: 45,
              }}
              className="relative z-10 cursor-grab [grid-area:1/1] active:cursor-grabbing"
            />
          </motion.div>
          <motion.div
            variants={{
              folded: {
                opacity: 0,
                scale: 0.9,
                y: 30,
              },
              open: {
                opacity: 1,
                scale: 1,
                y: 0,
              },
            }}
            className="flex w-full justify-center text-xl font-semibold md:text-4xl"
          >
            <p className="rounded-2xl bg-white px-12 py-5 text-mainAccent">
              WOMAN FASHION
            </p>
          </motion.div>
        </motion.div>
      </div>
    </>
  );
}
