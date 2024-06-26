import { Checkbox } from '@mui/material'
import cn from 'clsx'
import { GripVertical, Loader, Trash } from 'lucide-react'
import type { Dispatch, SetStateAction } from 'react'
import { Controller, useForm } from 'react-hook-form'

import { TransparentField } from '@/components/ui/fields/transparent-field'
import { DatePicker } from '@/components/ui/task-edit/date-picker'
import { SingleSelect } from '@/components/ui/task-edit/single-select'

import type { ITaskResponse, TypeTaskFormState } from '@/types/task.types'

import { useDeleteTask } from '@/hooks/useDeleteTask'
import { useTaskDebounce } from '@/hooks/useTaskDebounce'

import styles from './list-row.module.css'

interface IListRow {
	item: ITaskResponse
	setItems: Dispatch<SetStateAction<ITaskResponse[] | undefined>>
}

export const ListRow = ({ item, setItems }: IListRow) => {
	const { register, control, watch } = useForm<TypeTaskFormState>({
		defaultValues: {
			name: item.name,
			isCompleted: item.isCompleted,
			createdAt: item.createdAt,
			priority: item.priority
		}
	})
	useTaskDebounce({ watch, itemId: item.id })

	const { deleteTask, isDeletePending } = useDeleteTask()
	return (
		<div
			className={cn(
				styles.row,
				watch('isCompleted') ? styles.completed : '',
				'animation-opacity'
			)}
		>
			<div>
				<span className={styles.rowInfo}>
					<button aria-describedby='todo-item'>
						<GripVertical className={styles.grip} />
					</button>

					<Controller
						control={control}
						name='isCompleted'
						render={({ field: { value, onChange } }) => (
							<Checkbox
								onChange={onChange}
								checked={value}
							/>
						)}
					/>

					<TransparentField {...register('name')} />
				</span>
			</div>
			<div>
				<Controller
					control={control}
					name='createdAt'
					render={({ field: { value, onChange } }) => (
						<DatePicker
							onChange={onChange}
							value={value || ''}
						/>
					)}
				/>
			</div>
			<Controller
				control={control}
				name='priority'
				render={({ field: { value, onChange } }) => (
					<SingleSelect
						data={['high', 'medium', 'low'].map(item => ({
							value: item,
							label: item
						}))}
						onChange={onChange}
						value={value || ''}
					/>
				)}
			/>

			<div>
				<button
					onClick={() =>
						item.id ? deleteTask(item.id) : setItems(prev => prev?.slice(0, -1))
					}
					className={styles.delete}
				>
					{isDeletePending ? <Loader size={15} /> : <Trash size={15} />}
				</button>
			</div>
		</div>
	)
}
