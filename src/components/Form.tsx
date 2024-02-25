import { FormEvent } from "react"
import Button from "./button"
interface Props {
	validate: boolean
	submit: (e: FormEvent) => void
}
function Form({ submit, validate }: Props) {
	return (
		<div className="w-full">
			<form onSubmit={submit}>
				<div className="flex gap-4 w-full items-start justify-center  -md:flex-col">
					<div className=" md:w-5/6 w-full flex flex-col justify-end">
						<label htmlFor="shortener" className="sr-only">
							shorten it
						</label>

						<input
							className="placeholder:text-gray-500 w-full rounded-sm px-6 py-2"
							type="text"
							placeholder="shorten a link here..."
						/>
						<p className={validate ? "block text-red-500" : "hidden"}>
							Please add a link
						</p>
					</div>
					<div className="-md:flex -md:w-full -md:flex-col">
						<Button
							type="submit"
							bg_color="bg-Cyan"
							text_color="text-white font-bold -md:text-lg"
							hover_bg_color="hover:bg-Cyan_Hover"
							rounded="rounded-lg"
						>
							Shorten It!
						</Button>
					</div>
				</div>
			</form>
		</div>
	)
}

export default Form
