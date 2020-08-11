import React from "react"
import Head from "next/head"
import DefaultLayout from "@src/components/Layout/DefaultLayout"

export default function Home() {
	return (
		<DefaultLayout pageName="home">
			<Head>
				<title>인덱스 타이틀</title>
			</Head>
			인덱스 컨텐츠
		</DefaultLayout>
	)
}
