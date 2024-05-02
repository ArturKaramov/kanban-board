import {
	TextField,
	TextFieldProps,
	ThemeProvider,
	createTheme
} from '@mui/material'
import { type InputHTMLAttributes, forwardRef } from 'react'

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

type TypeTransparentField = InputHTMLAttributes<HTMLInputElement> &
	TextFieldProps
export const TransparentField = forwardRef<
	HTMLInputElement,
	TypeTransparentField
>(({ className, ...rest }, ref) => {
	return (
		<ThemeProvider theme={theme}>
			<TextField
				variant='standard'
				size='small'
				className={className}
				ref={ref}
				{...rest}
			/>
		</ThemeProvider>
	)
})

TransparentField.displayName = 'TransparentField'
