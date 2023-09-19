import React from "react";
import Title from "./Title";
import Menu from "./Menu";

export default function Navbar() {
  return (
    <div className="navbar bg-slate-950">
      <Title />
      <Menu />
    </div>
  );
}
