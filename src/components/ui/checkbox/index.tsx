import { Checkbox as MuiCheckbox } from '@mui/material'

enum Colors {
	red = 'rgb(232, 42, 42)',
	blue = 'blue',
	green = 'green',
	yellow = 'yellow',
	orange = 'orange',
	teal = 'teal',
	navy = 'navy',
	lime = 'lime',
	cyan = 'cyan',
	pink = 'pink',
	purple = 'purple',
	amber = 'amber',
	indigo = 'indigo',
	gray = 'gray'
}

export const Checkbox = (props: {
	id?: string
	extra?: string
	color?: Colors
	[x: string]: any
}) => {
	const { extra, color = Colors.green, id, ...rest } = props
	return (
		<Checkbox
			id={id}
			className={extra}
			style={{ backgroundColor: color }}
		/>
	)
}
