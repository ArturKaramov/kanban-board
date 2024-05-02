import {
	TextField,
	TextFieldProps,
	TextFieldVariants,
	ThemeProvider,
	createTheme
} from '@mui/material'
import { Ref, forwardRef } from 'react'

type TInputFieldProps = {
	id: string
	label: string
	extra?: string
	placeholder: string
	variant?: TextFieldVariants
	state?: 'error' | 'success'
	disabled?: boolean
	type?: string
	isNumber?: boolean
}
const theme = createTheme({
	components: {
		MuiTextField: {
			styleOverrides: {
				root: () => ({
					width: '100%'
				})
			}
		}
	}
})

export const Field = forwardRef(function Field(
	{
		id,
		label,
		extra,
		placeholder,
		variant,
		state,
		disabled,
		type,
		isNumber,
		...rest
	}: TInputFieldProps & TextFieldProps,
	ref: Ref<HTMLInputElement>
) {
	return (
		<div className={extra}>
			<ThemeProvider theme={theme}>
				<TextField
					type={type}
					ref={ref}
					id={id}
					label={label}
					placeholder={placeholder}
					variant={variant}
					color={state}
					disabled={disabled}
					onKeyDown={event => {
						if (
							isNumber &&
							!/[0-9]/.test(event.key) &&
							event.key !== 'Backspace' &&
							event.key !== 'Tab' &&
							event.key !== 'Enter' &&
							event.key !== 'ArrowLeft' &&
							event.key !== 'ArrowRight'
						) {
							event.preventDefault()
						}
					}}
					{...rest}
				/>
			</ThemeProvider>
		</div>
	)
})
