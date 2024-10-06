"use client";

import Button from "@/components/Button";
import Image from "next/image";
import Link from "next/link";
import ToggleSwitch from "@/components/Toggle";

import { useState } from "react";

const Navbar = () => {
  const [isToggled, setIsToggled] = useState(false);

  <ToggleSwitch isToggled={isToggled} setIsToggled={setIsToggled} />;
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

      <div className="hidden md:flex space-x-8 text-gray-800 items-center text-xl">
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
          <div className="px-4  text-white rounded">
            <Button className="text-xl">SIGN UP</Button>
          </div>
        </Link>
        <ToggleSwitch isToggled={isToggled} setIsToggled={setIsToggled} />
      </div>
    </nav>
  );
};

export default Navbar;
