import { X } from 'lucide-react'

import { Chip } from '@/components/ui/chip'

import { useOutside } from '@/hooks/useOutside'

import styles from './single-select.module.css'

export interface IOption {
	label: string
	value: string
}

interface ISingleSelect {
	data: IOption[]
	onChange: (value: string) => void
	value: string
	isColorSelect?: boolean
}

export function SingleSelect({
	data,
	onChange,
	value,
	isColorSelect
}: ISingleSelect) {
	const { isShow, setIsShow, ref } = useOutside(false)
	const getValue = () => data.find(item => item.value === value)?.value
	return (
		<div
			className={styles.main}
			ref={ref}
		>
			<button
				onClick={e => {
					e.preventDefault()
					setIsShow(!isShow)
				}}
			>
				{getValue() ? (
					<Chip
						variant={value}
						style={isColorSelect ? { backgroundColor: value } : {}}
					>
						{getValue()}
					</Chip>
				) : (
					<Chip>Click</Chip>
				)}
			</button>
			{value && (
				<button
					className={styles.close}
					onClick={e => {
						e.preventDefault()
						onChange('')
					}}
				>
					<X
						size={14}
						color='black'
					/>
				</button>
			)}
			{isShow && (
				<div
					className={styles.modal}
					style={{ top: 'calc(100% + 8px)' }}
				>
					{data.map(item => (
						<button
							key={item.value}
							onClick={e => {
								e.preventDefault()
								onChange(item.value)
								setIsShow(false)
							}}
							className={styles.button}
							style={isColorSelect ? { backgroundColor: item.value } : {}}
						>
							<Chip variant={item.value}>{item.label}</Chip>
						</button>
					))}
				</div>
			)}
		</div>
	)
}
