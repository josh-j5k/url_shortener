import Button from "./button"
import Form from "./Form"

function Hero() {
	return (
		<section className="grid grid-cols-2 -md:gap-12 pb-40 -md:grid-cols-1 -md:pt-12">
			<div className="md:w-[60%] -md:px-8 -md:row-start-2 mx-auto flex flex-col md:justify-center">
				<h1 className="font-bold text-5xl -md:text-4xl -md:text-center leading-tight text-Very_Dark_Violet mb-2">
					More than just shorter links
				</h1>
				<p className="mb-6 -md:text-center">
					Build your brands recognition and get detailed insights on how your
					links are performing.
				</p>
				<div className="-md:text-center">
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
			</div>
			<div className="-md:pl-8">
				<img
					className="-md:w-full"
					src="/images/illustration-working.svg"
					alt="working illustration"
				/>
			</div>
			<div className="w-4/5 md:px-16 px-8 left-1/2 -bottom-16 -translate-x-1/2 rounded-lg md:py-16 py-12 absolute bg-Dark_Violet isolate overflow-clip">
				<img
					className="absolute -z-10 left-0 top-0 w-[102%] -md:hidden"
					src="/images/bg-shorten-desktop.svg"
					alt="illustration"
				/>
				<img
					className="absolute -z-10 left-0 top-0 md:hidden"
					src="/images/bg-shorten-mobile.svg"
					alt="illustration"
				/>
				<Form />
			</div>
		</section>
	)
}

export default Hero
