import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

function Header() {
  return (
    <header className="absolute w-full z-30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-20">
          <div className="shrink-0 mr-4 mt-8">
            {/* Logo */}
            <Image
              src="/images/embrace-earth-web.png"
              alt="emabrace logo"
              width={310}
              height={75}
            />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
