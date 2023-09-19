import Link from "next/link";
import React from "react";
import { SiGithub, SiInstagram } from "react-icons/si";

export default function SocialMedia() {
  return (
    <>
      <Link
        href="https://github.com/cumapemula"
        className="text-xl lg:hover:text-2xl transition-all duration-300"
      >
        <SiGithub className="text-orange-700 lg:mt-6" />
      </Link>
      <Link
        href="https://www.instagram.com/taufiqadsn"
        className="text-xl lg:hover:text-2xl transition-all duration-300"
      >
        <SiInstagram className="text-orange-700 lg:mt-4" />
      </Link>
    </>
  );
}
