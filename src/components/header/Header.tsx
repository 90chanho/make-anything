import React from "react"
import Link from "next/link"
import Gnb from "@src/components/gnb/Gnb"
import { headerStyle } from "@styles"

export default function Header() {
	return (
		<header className={headerStyle.header}>
			<h1>Clovirtual Fashion</h1>
			<Gnb />
		</header>
	)
}
