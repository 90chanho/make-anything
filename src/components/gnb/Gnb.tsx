import React from "react";
import Link from "next/link";

export default function Gnb() {
  return (
    <nav>
      <ul>
        <li>
          <Link href="/game">
            <a>게임</a>
          </Link>
        </li>
        <li>
          <Link href="/login">
            <a>로그인</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
