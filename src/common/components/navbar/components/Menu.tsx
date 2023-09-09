import { NAVBAR_MENU } from "@/common/constant/menu";
import React from "react";

export default function Menu() {
  return (
    <div className="navbar-center hidden lg:flex">
      <ul className="menu menu-horizontal px-1 capitalize">
        {NAVBAR_MENU?.map((menu) => (
          <li>
            <a href="/" className="font-medium">{menu}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}
