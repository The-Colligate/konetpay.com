import Image from "next/image";
import Link from "next/link";

export const Navbar = () => {
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
    <nav className="flex items-center px-12 py-3 absolute w-full top-0 z-10">
      <Link href="/">
        <Image
          src="/logo.png"
          width={150}
          height={46}
          alt="KonetPay logo"
        />
      </Link>
      <div className="flex-grow flex justify-center">
        <ul className="flex items-center gap-8">
          {links.map((link) => (
            <li key={link.name}>
              <Link href={link.link}>{link.name}</Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};
