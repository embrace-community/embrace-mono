import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";

function Header() {
  return (
    <header className="absolute w-full z-30">
      <div className="flex w-full mt-4">
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
