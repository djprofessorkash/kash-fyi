"use client";

import Link from "next/link";
import Typewriter from "typewriter-effect";

interface NavBarContent {
	leftJustifiedTitle?: string
	rightJustifiedOption?: string
	colorProperty?: string
}

const NavBar = ({
	leftJustifiedTitle = "KASH",
	rightJustifiedOption = "about",
	colorProperty = "default"
}: NavBarContent): JSX.Element => {
	return (
		<>
			<header className="fixed top-0 w-full text-bone font-main z-50">
				<div className="sticky m-5 md:m-8 lg:m-10 flex justify-between">
					<h2 className={`font-title xs:text-2xl sm:text-5xl hover:animate-pulse cursor-pointer
                  ${colorProperty === "tech" ? "text-bone" : ""}
                  ${colorProperty === "arch" ? "text-green" : ""}
                  ${colorProperty === "prod" ? "text-red" : ""}
                `}>
						<Link href="/">
								<Typewriter 
									onInit = {(typewriter) => {
										typewriter.typeString(`${leftJustifiedTitle.toUpperCase()}`).start()
									}} 
									options = {{
										delay: 15,
										cursor: ""
									}}
								/>
						</Link>
					</h2>
					<div className="flex">
						<div className="text-link justify-end hover:animate-pulse cursor-pointer">
							<Link className="uppercase" href={`/${rightJustifiedOption}`}>{rightJustifiedOption}</Link>
						</div>
					</div>
				</div>
			</header>
		</>
	)
}

export default NavBar;