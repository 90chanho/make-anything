import React from "react";
import Link from "next/link";
import Gnb from "@src/components/gnb/Gnb";
import "./Header.scss";

export default function Header() {
  return (
    <header className="header">
      <h1>
        <Link href="/">
          <a>
            <img src="/images/logo.svg" alt="Clovirtual Fashion" />
          </a>
        </Link>
      </h1>
      <Gnb />
    </header>
  );
}
