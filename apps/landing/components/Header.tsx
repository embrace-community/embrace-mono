import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";

function Header() {
  return (
    <header className="absolute w-full z-30">
      <div className="hidden md:flex max-w-6xl mx-auto px-4">
        <div className="items-center h-20">
          <div className="shrink-0 mr-4 mt-8">
            {/* Logo */}
            <Image
              src="/images/embrace-inter.png"
              alt="emabrace logo"
              width={310}
              height={75}
            />
          </div>
        </div>
      </div>

      <div className="flex md:hidden w-full mt-4">
        <div className="mx-auto h-20 ">
          {/* Logo */}
          <Image
            src="/images/embrace-inter.png"
            alt="emabrace logo"
            width={310}
            height={75}
          />
        </div>
      </div>
    </header>
  );
}

export default Header;
