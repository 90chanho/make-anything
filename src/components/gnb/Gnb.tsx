import React from 'react'
import Link from "next/link"

export default function Gnb() {
  return (
    <nav>
				<ul>
					<li>
						<Link href="/counter">
							<a>컨텐츠1 - counter</a>
						</Link>
					</li>
					<li>
						<Link href="/content2">
							<a>컨텐츠2</a>
						</Link>
					</li>
				</ul>
			</nav>
  )
}
