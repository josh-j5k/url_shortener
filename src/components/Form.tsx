import Button from "./button"

function Form() {
	return (
		<form>
			<div className="flex gap-4 w-full items-center  -md:flex-col">
				<div className="md:w-4/5 w-full">
					<label htmlFor="shortener" className="sr-only">
						shorten it
					</label>
					<input
						className="placeholder:text-gray-500 w-full rounded-sm px-6 py-2"
						type="text"
						placeholder="shorten a link here..."
					/>
				</div>
				<div className="-md:flex w-full -md:flex-col">
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
	)
}

export default Form
