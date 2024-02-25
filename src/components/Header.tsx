import { useState } from "react"
import Button from "./button"
function Header() {
	const [toggled, setToggled] = useState(false)
	const navClasses =
		"flex w-full items-center justify-between -md:flex-col -md:bg-Dark_Violet -md:rounded-lg py-16 z-50 -md:w-5/6 -md:gap-6 -md:px-8 -md:fixed -md:top-24 -md:left-1/2 -md:-translate-x-1/2 transition duration-500"
	return (
		<header className="flex -md:justify-between gap-10 md:px-36 px-8 h-24 items-center">
			<div className="flex  items-center">
				<img src="/images/logo.svg" alt="logo" />
			</div>
			<button
				type="button"
				className="md:hidden"
				onClick={() => setToggled(!toggled)}
			>
				<span className={toggled ? "hidden" : ""}>
					<i className="fas fa-bars fa-2xl text-Grayish_Violet"></i>
				</span>
				<span className={toggled ? "" : "hidden"}>
					<i className="fas fa-xmark fa-lg text-Grayish_Violet"></i>
				</span>
			</button>
			<div
				className={
					toggled
						? navClasses + " -md:translate-y-0"
						: navClasses + " -md:-translate-y-[200%]"
				}
			>
				<nav className="-md:border-b -md:w-full -md:pb-8">
					<ul className="flex font-bold -md:flex-col -md:items-center -md:gap-6  gap-3 text-Grayish_Violet -md:text-white -md:text-lg ">
						<li className="hover:text-Very_Dark_Blue">
							<a href="#">Features</a>
						</li>
						<li className="hover:text-Very_Dark_Blue">
							<a href="#">Pricing</a>
						</li>
						<li className="hover:text-Very_Dark_Blue">
							<a href="#">Resources</a>
						</li>
					</ul>
				</nav>
				<div className="flex -md:w-full -md:flex-col -md:gap-6 gap-2">
					<Button
						type="button"
						bg_color="bg-transparent"
						text_color="text-Grayish_Violet -md:text-white font-bold -md:text-lg"
						hover_bg_color="transparent"
						rounded="rounded-2xl "
					>
						Login
					</Button>
					<Button
						type="button"
						bg_color="bg-Cyan"
						text_color="text-white font-bold -md:text-lg"
						hover_bg_color="hover:bg-Cyan_Hover"
						rounded="rounded-3xl"
					>
						Sign up
					</Button>
				</div>
			</div>
		</header>
	)
}

export default Header
