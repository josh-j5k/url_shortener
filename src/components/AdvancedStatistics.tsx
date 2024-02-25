import { useState } from "react"
import Button from "./button"
import Card from "./Card"
interface TData {
	key: string
	shrtlnk: string
	url: string
}
interface Props {
	data: TData[]
}
function AdvancedStatistics({ data }: Props) {
	const [copied, setCopied] = useState(false)
	function copyToCilpboard(url: string) {
		navigator.clipboard.writeText(url).then(() => {
			setCopied(true)
		})
	}
	return (
		<section className="md:px-36 px-8 py-16 pt-32 bg-gray-200">
			<div className="flex flex-col gap-3">
				{data.map((item) => (
					<div
						key={item.key}
						className="shadow flex bg-white rounded md:py-2 md:px-6 md:items-center -md:flex-col md:justify-between"
					>
						<div className="-md:border-b -md:p-4 -md:py-3">
							<p className=" text-Dark_Violet">{item.url}</p>
						</div>
						<div className="flex -md:flex-col md:items-center md:gap-6 -md:w-full">
							<div className="-md:p-4 -md:py-3">
								<p className="text-Cyan">{item.shrtlnk}</p>
							</div>
							<div className="-md:w-full -md:flex flex-col -md:px-4 -md:pb-3">
								<Button
									onClick={() => copyToCilpboard(item.shrtlnk)}
									type="button"
									bg_color={copied ? " bg-Very_Dark_Violet" : "bg-Cyan"}
									text_color="text-white font-bold -md:text-lg py-1.5"
									hover_bg_color={
										copied
											? "hover:bg-[hsl(260_30%_18%)]"
											: "hover:bg-Cyan_Hover"
									}
									rounded="rounded-lg"
								>
									{copied ? "copied!" : "copy"}
								</Button>
							</div>
						</div>
					</div>
				))}
			</div>
			<div className=" max-w-lg mx-auto text-center mb-20">
				<h2 className="text-3xl font-bold pt-24 mb-4 text-Very_Dark_Blue text-center">
					Advanced Statistics
				</h2>
				<p>
					Track how your links are performing across the web with our advanced
					statistic dashboard
				</p>
			</div>
			<div className="grid relative isolate md:grid-cols-3 grid-cols-1 md:gap-6 gap-24">
				<div>
					<Card
						title="Brand Recognition"
						description="Boost your brand recognition with each click. Generic links don't
						mean a thing. Branded links helps instill confidence in your
						content."
					>
						<img
							src="/images/icon-brand-recognition.svg"
							alt="brand recognition"
						/>
					</Card>
				</div>
				<div className="md:mt-12">
					<Card
						title="Detailed Records"
						description="Gain insights in who is clicking your link. Knowing where and when people are engage with your content helps inform better decisions."
					>
						<img
							src="/images/icon-detailed-records.svg"
							alt="Detailed Records"
						/>
					</Card>
				</div>
				<div className="md:mt-24">
					<Card
						title="Fully Customizable"
						description="Improve brand awareness and content discoverability through customizable links. Supercharging audience engagement."
					>
						<img
							src="/images/icon-fully-customizable.svg"
							alt="Fully Customizable"
						/>
					</Card>
				</div>
				<span className="absolute md:w-5/6 w-2 md:h-2 h-5/6 bg-Cyan left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 -z-10"></span>
			</div>
		</section>
	)
}

export default AdvancedStatistics
