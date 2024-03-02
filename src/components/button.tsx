interface Props {
	children: string
	bg_color: string
	text_color: string
	hover_bg_color: string
	rounded: string
	type: "submit" | "reset" | "button"
	onClick?: (ev: React.MouseEvent) => void
}

function Button({
	children,
	bg_color,
	text_color,
	hover_bg_color,
	rounded,
	type,
	onClick,
}: Props) {
	return (
		<button
			onClick={(ev: React.MouseEvent) => onClick !== undefined && onClick(ev)}
			type={type}
			className={`px-5 py-2 ${bg_color} ${text_color} ${hover_bg_color} ${rounded}`}
		>
			{children}
		</button>
	)
}

export default Button
