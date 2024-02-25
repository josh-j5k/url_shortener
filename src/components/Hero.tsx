import { FormEvent } from "react"
import Button from "./button"
import Form from "./Form"
import { useState } from "react"
interface Props {
	getLinks: (bodyContent: string) => Promise<void>
}
function Hero({ getLinks }: Props) {
	const [validate, setValidate] = useState(false)
	function submit(e: FormEvent) {
		e.preventDefault()
		const form = e.target as HTMLFormElement
		const input = form[0] as HTMLInputElement
		if (input.value === "") {
			setValidate(true)
			setTimeout(() => {
				setValidate(false)
			}, 4000)
		} else {
			getLinks(input.value)
			input.value = ""
		}
	}
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
			<div className="w-4/5 md:px-16 px-8 left-1/2 -bottom-16 -translate-x-1/2 rounded-lg py-8 min-h-40 flex items-center absolute bg-Dark_Violet isolate overflow-clip">
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
				<Form submit={submit} validate={validate} />
			</div>
		</section>
	)
}

export default Hero
