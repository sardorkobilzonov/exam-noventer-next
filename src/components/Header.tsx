import Image from "next/image";
import Link from "next/link";
import React from "react";
import Logo from "@/assets/Logo.png";

const Header = () => {
  const getNavLinkClasses = () =>
    `text-white font-medium  text-[18px] font-inter `;
  return (
    <>
      <nav className="bg-custom container mx-auto flex items-center justify-between py-4 px-4">
        <div className="flex items-center">
          <Link href="/">
            <Image src={Logo} alt="Logo" width={180} height={30} />
          </Link>
        </div>
        <div className="hidden md:flex space-x-8">
          <Link href="/" className = {getNavLinkClasses()} >
            Bosh sahifa
          </Link>
          <Link href="/about" className = {getNavLinkClasses()} >
            Portfolio
          </Link>
          <Link href="/services" className = {getNavLinkClasses()} >
            Xizmatlar
          </Link>
          <Link href="/customers" className = {getNavLinkClasses()} >
            Aloqa
          </Link>
        </div>
        <div className="flex items-center justify-between gap-[6px]">
          <button className="text-white px-[26px] py-[12px] bg-transparent border-0 outline-0">
            Uz
          </button>
          <div className="bg-white/10 border border-white/20 backdrop-blur-md cursor-pointer rounded-lg px-6 py-3 text-white text-lg font-semibold">
            Loyiha bormi ?
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
