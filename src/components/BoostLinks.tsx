import Button from "./button"

function BoostLinks() {
	return (
		<section className="relative isolate py-24 md:py-16 bg-Dark_Violet overflow-clip">
			<div className="max-w-lg mx-auto flex flex-col gap-6 items-center justify-center px-8">
				<h3 className="text-white text-2xl font-bold">
					Boost your links today
				</h3>
				<Button
					type="button"
					bg_color="bg-Cyan"
					text_color="text-white font-bold -md:text-lg"
					hover_bg_color="hover:bg-Cyan_Hover"
					rounded="rounded-3xl"
				>
					Get Started
				</Button>
			</div>
			<img
				className="absolute w-[102%] -z-10 left-0 top-0 -md:hidden"
				src="/images/bg-boost-desktop.svg"
				alt="background image"
			/>
			<img
				className="absolute w-[102%] -z-10 left-0 top-0 md:hidden"
				src="/images/bg-boost-mobile.svg"
				alt="background image"
			/>
		</section>
	)
}

export default BoostLinks
