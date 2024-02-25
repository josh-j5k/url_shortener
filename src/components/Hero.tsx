import Button from "./button"

function Hero() {
	return (
		<section className="grid grid-cols-2 h-[100dvh - 96px] -md:gap-12 -md:grid-cols-1 -md:py-10">
			<div className="md:w-[60%] -md:px-8 -md:row-start-2 mx-auto flex flex-col justify-center">
				<h1 className="font-bold text-5xl -md:text-4xl -md:text-center leading-tight text-Very_Dark_Violet mb-2">
					More than just shorter links
				</h1>
				<p className="mb-6 -md:text-center">
					Build your brands recognition and get detailed insights on how your
					links are performing.
				</p>
				<div className="-md:text-center">
					<Button
						bg_color="bg-Cyan"
						text_color="text-white font-bold -md:text-lg"
						hover_bg_color="hover:bg-Cyan_Hover"
						rounded="rounded-3xl"
					>
						Get Started
					</Button>
				</div>
			</div>
			<div className="-md:pl-8">
				<img
					className="-md:w-full"
					src="/images/illustration-working.svg"
					alt="working illustration"
				/>
			</div>
		</section>
	)
}

export default Hero
