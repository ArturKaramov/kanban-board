import type { CSSProperties, PropsWithChildren } from 'react'

import styles from './chip.module.css'

interface IChip {
	className?: string
	variant?: string
	style?: CSSProperties
}

export function Chip({
	children,
	className,
	variant = 'gray',
	style
}: PropsWithChildren<IChip>) {
	return (
		<span
			className={`${className} ${styles.chip} ${styles[variant]}`}
			style={style}
		>
			{children}
		</span>
	)
}
