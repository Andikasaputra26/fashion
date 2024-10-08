"use client";

import Button from "@/components/Button";
import Image from "next/image";
import Link from "next/link";
import ToggleSwitch from "@/components/Toggle";

import { Menu, CircleX } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [isToggled, setIsToggled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="min-w-full fixed top-0 z-20 mx-auto flex items-center justify-between p-4 bg-white">
      <div className="flex items-center space-x-2">
        <div className="font-bold text-xl flex items-center">
          <div className="mr-2 w-6 h-6 rounded-full">
            <Image src="/img/logo.png" alt="logo" width={200} height={200} />
          </div>
          <div className="text-3xl items-center">FASHION</div>
        </div>
      </div>

      {/* Toggle button for mobile menu */}
      <div className="md:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          className="focus:outline-none"
        >
          <span className="sr-only">Toggle menu</span>
          {isOpen ? <CircleX /> : <Menu />}
        </button>
      </div>

      {/* Desktop menu or mobile menu if `isOpen` */}
      <div
        className={`${
          isOpen ? "block" : "hidden"
        } md:flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6 text-gray-800 items-center text-xl transition-all duration-300 ease-in-out `}
      >
        <Link href="/catalogue">
          <div className="hover:underline">CATALOGUE</div>
        </Link>
        <Link href="/fashion">
          <div className="hover:underline">FASHION</div>
        </Link>
        <Link href="/favourite">
          <div className="hover:underline">FAVOURITE</div>
        </Link>
        <Link href="/lifestyle">
          <div className="hover:underline">LIFESTYLE</div>
        </Link>
        <Link href="/signup">
          <div className="px-4 py-2  text-white rounded-md">
            <Button className="text-xl">SIGN UP</Button>
          </div>
        </Link>

        {/* ToggleSwitch for theme change */}
        <ToggleSwitch isToggled={isToggled} setIsToggled={setIsToggled} />
      </div>
    </nav>
  );
};

export default Navbar;
