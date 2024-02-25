interface Props {
	children: string
	bg_color: string
	text_color: string
	hover_bg_color: string
	rounded: string
	width?: string
}

function Button({
	children,
	bg_color,
	text_color,
	hover_bg_color,
	rounded,
}: Props) {
	return (
		<button
			type="button"
			className={`px-5 py-2 ${bg_color} ${text_color} ${hover_bg_color} ${rounded}`}
		>
			{children}
		</button>
	)
}

export default Button
