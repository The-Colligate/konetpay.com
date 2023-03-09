"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import ThemeSwitch from "./themeswitch";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);

  const links = [
    {
      name: "Products",
      link: "#",
      dropdown: true,
      items: [
        {
          name: "KonetSalary",
          link: "#salary",
        },
        {
          name: "KonetRevenue",
          link: "#revenue",
        },
        {
          name: "KonetAIS",
          link: "#ais",
        },
        {
          name: "KonetAccounts",
          link: "#accounts",
        },
        {
          name: "KonetTSA",
          link: "#tsa",
        },
        {
          name: "KonetBVS",
          link: "#bvs",
        },
        {
          name: "KonetPOS",
          link: "#pos",
        },
      ],
    },
    {
      name: "About Us",
      link: "https://21ctl.com/explore-more",
      dropdown: false,
    },
    {
      name: "Main Portal",
      link: "https://www.konet.com/",
      dropdown: false,
    },
  ];

  return (
    <nav
      id="top"
      className="flex items-center justify-between px-12 py-3 absolute min-w-full top-0 z-10 largeTablet:px-10 smallTablet:px-4 smallTablet:pt-0"
    >
      <Link href="/">
        <Image
          src="/logo.png"
          width={150}
          height={46}
          alt="KonetPay logo"
          className="tablet:max-w-[8rem] phone:max-w-[6rem] dark:hidden"
        />
        <Image
          src="/logo-dark.png"
          width={150}
          height={46}
          alt="KonetPay logo"
          className="tablet:max-w-[8rem] phone:max-w-[6rem] hidden dark:block"
        />
      </Link>
      <div className="flex-grow flex justify-center smallTablet:hidden">
        <ul className="flex items-center gap-8">
          {links.map((link) => (
            <li
              key={link.name}
              className="relative"
            >
              <Link
                className="flex item-center hover:text-primary"
                href={link.link}
                onClick={
                  link.dropdown
                    ? () => {
                        console.log("clicked");
                        setOpenMenu(openMenu === link.name ? null : link.name);
                      }
                    : undefined
                }
                target={!link.dropdown ? "_blank" : undefined}
              >
                {link.name}
                {link.dropdown && (
                  <>
                    &nbsp;
                    <span
                      className={`-mt-0.5 ${
                        openMenu === link.name ? "rotate-180 mt-1" : ""
                      }`}
                    >
                      &#8964;
                    </span>
                  </>
                )}
              </Link>
              {link.dropdown && (
                <div
                  className={`absolute left-0 w-48 top-10 bg-white rounded shadow-lg transition-all ${
                    openMenu === link.name ? "block" : "hidden"
                  }`}
                >
                  <ul className="w-full py-4 px-8 bg-primary bg-opacity-5">
                    {link?.items?.map((item) => (
                      <li
                        key={item.name}
                        className="mb-5 last-of-type:mb-0"
                      >
                        <a
                          href={item.link}
                          className="hover:text-primary"
                        >
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
      <div className="smallTablet:hidden">
        <ThemeSwitch />
      </div>
      <button
        className="hidden smallTablet:block"
        onClick={() => setIsOpen(true)}
      >
        <Menu />
      </button>
      <div
        className={`fixed top-0 left-0 w-full h-full bg-white z-10 transition-all hidden smallTablet:block ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } dark:bg-[#343a41]`}
      >
        <div className="fixed bottom-2 right-2 ">
          <ThemeSwitch />
        </div>
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
                <Link
                  className="flex item-center text-lg hover:text-primary"
                  href={link.link}
                  onClick={
                    link.dropdown
                      ? () => {
                          console.log("clicked");
                          setOpenMenu(
                            openMenu === link.name ? null : link.name,
                          );
                        }
                      : undefined
                  }
                  target={!link.dropdown ? "_blank" : undefined}
                >
                  {link.name}
                  {link.dropdown && (
                    <>
                      &nbsp;
                      <span
                        className={`-mt-0.5 ${
                          openMenu === link.name ? "rotate-180 mt-1" : ""
                        }`}
                      >
                        &#8964;
                      </span>
                    </>
                  )}
                </Link>
                {link.dropdown && (
                  <ul
                    className={`rounded mt-5 ${
                      openMenu === link.name ? "block" : "hidden"
                    }`}
                  >
                    {link?.items?.map((item) => (
                      <li
                        key={item.name}
                        className="mb-5 last-of-type:mb-0"
                        onClick={() => {
                          setIsOpen(false);
                          setOpenMenu(null);
                        }}
                      >
                        <a
                          href={item.link}
                          className="hover:text-primary"
                        >
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
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
