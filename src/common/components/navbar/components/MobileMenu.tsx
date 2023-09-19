/* eslint-disable react/no-array-index-key */
import { NAVBAR_MENU } from "@/common/constant/menu";
import React from "react";
import SocialMedia from "../../elements/SocialMedia";

export default function MobileMenu() {
  return (
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 text-orange-700"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16"
          />
        </svg>
      </label>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-slate-950 text-orange-700 rounded-box w-52 h-screen items-center justify-center capitalize"
      >
        {NAVBAR_MENU?.map((menu, index) => (
          <li key={index} className="my-4 hover:bg-orange-700 rounded transition-all duration-300">
            <a href="/">{menu}</a>
          </li>
        ))}
        <li>
          <div className="flex p-5 gap-3">
            <SocialMedia />
          </div>
        </li>
      </ul>
    </div>
  );
}
