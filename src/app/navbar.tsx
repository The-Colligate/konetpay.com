"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    {
      name: "Products",
      link: "#",
    },
    {
      name: "About Us",
      link: "#",
    },
    {
      name: "FAQ",
      link: "#",
    },
  ];

  return (
    <nav className="flex items-center justify-between px-12 py-3 absolute min-w-full top-0 z-10 largeTablet:px-10 smallTablet:px-4">
      <Link href="/">
        <Image
          src="/logo.png"
          width={150}
          height={46}
          alt="KonetPay logo"
        />
      </Link>
      <div className="flex-grow flex justify-center smallTablet:hidden">
        <ul className="flex items-center gap-8">
          {links.map((link) => (
            <li key={link.name}>
              <Link href={link.link}>{link.name}</Link>
            </li>
          ))}
        </ul>
      </div>
      <button
        className="hidden smallTablet:block"
        onClick={() => setIsOpen(true)}
      >
        <Menu />
      </button>
      <div
        className={`fixed top-0 left-0 w-full h-full bg-white z-10 transition-all ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="absolute top-4 right-4 p-4">
          <button onClick={() => setIsOpen(false)}>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18 6L6 18"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M6 6L18 18"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
        <div className="flex flex-col items-center justify-center h-full">
          <ul className="flex flex-col gap-8">
            {links.map((link) => (
              <li key={link.name}>
                <Link href={link.link}>{link.name}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

const Menu = () => (
  <svg
    width="58"
    height="58"
    viewBox="0 0 58 58"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g filter="url(#filter0_d_836_2806)">
      <circle
        cx="29"
        cy="29"
        r="20"
        fill="none"
      />
    </g>
    <path
      d="M21.125 35.375H36.875M21.125 29.375H36.875M21.125 23.375H36.875"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <defs>
      <filter
        id="filter0_d_836_2806"
        x="0"
        y="0"
        width="58"
        height="58"
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood
          floodOpacity="0"
          result="BackgroundImageFix"
        />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset />
        <feGaussianBlur stdDeviation="4.5" />
        <feComposite
          in2="hardAlpha"
          operator="out"
        />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0.964706 0 0 0 0 0.305882 0 0 0 0 0.121569 0 0 0 0.1 0"
        />
        <feBlend
          mode="normal"
          in2="BackgroundImageFix"
          result="effect1_dropShadow_836_2806"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_dropShadow_836_2806"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
);
