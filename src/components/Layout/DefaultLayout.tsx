import * as React from "react"
import Head from "next/head"
import Header from "@src/components/Header/Header"
import Footer from "@src/components/Footer/Footer"
import { layoutStyle } from "@src/styles"

interface LayoutProps {
	pageName: string
	children: React.ReactNode
}

export default function DefaultLayout(props: LayoutProps) {
	const { pageName, children } = props
	return (
		<div className={layoutStyle.app}>
			<Head>
				<title>{pageName}</title>
			</Head>
			<Header />
			<main>{children}</main>
			<Footer />
		</div>
	)
}
