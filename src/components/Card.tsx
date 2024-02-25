import { ReactNode } from "react"

interface Props {
	children: ReactNode
	title: string
	description: string
}

function Card({ children, title, description }: Props) {
	return (
		<div className="bg-white rounded p-8 pt-12 relative">
			<span className="bg-Dark_Violet w-20 absolute -top-12 -md:left-1/2 -md:-translate-x-1/2 aspect-square rounded-full flex justify-center items-center ">
				{children}
			</span>
			<h4 className="text-Very_Dark_Violet font-bold text-lg -md:text-center mb-6">
				{" "}
				{title}
			</h4>
			<p className="-md:text-center">{description}</p>
		</div>
	)
}

export default Card
