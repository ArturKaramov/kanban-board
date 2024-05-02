import { Button as MuiButton } from '@mui/material'
import type { ButtonHTMLAttributes, PropsWithChildren } from 'react'

type TypeButton = ButtonHTMLAttributes<HTMLButtonElement>

export function Button({
	children,
	onClick,
	type,
	disabled
}: PropsWithChildren<TypeButton>) {
	return (
		<MuiButton
			type={type}
			variant='contained'
			onClick={onClick}
			disabled={disabled}
		>
			{children}
		</MuiButton>
	)
}
