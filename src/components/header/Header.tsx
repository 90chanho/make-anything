import React from "react";
import Link from "next/link";
import Gnb from "@src/components/gnb/Gnb";
import "./Header.scss";

export default function Header() {
  return (
    <header className="header">
      <h1>
        <Link href="/">
          <a>Make Anything</a>
        </Link>
      </h1>
      <Gnb />
    </header>
  );
}
