/* eslint-disable react/no-array-index-key */
import { NAVBAR_MENU } from "@/common/constant/menu";
import React from "react";
import DownloadResume from "../../elements/DownloadResume";

export default function Menu() {
  return (
    <>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 capitalize">
          {NAVBAR_MENU?.map((menu, index) => (
            <li key={index}>
              <a
                href="/"
                className="font-bold text-orange-700 hover:bg-orange-700"
              >
                {menu}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="navbar-end hidden lg:flex">
        <DownloadResume />
      </div>
    </>
  );
}
