'use client'

import { DragDropContext } from '@hello-pangea/dnd'

import { useTaskDnd } from '@/hooks/useTaskDnd'
import { useTasks } from '@/hooks/useTasks'

import { COLUMNS } from '../columns.data'

import { ListRowParent } from './list-row-parent/ListRowParent'
import styles from './list-view.module.css'

export const ListView = () => {
	const { items, setItems } = useTasks()

	const { onDragEnd } = useTaskDnd()

	return (
		<DragDropContext onDragEnd={onDragEnd}>
			<div className={styles.table}>
				<div className={styles.header}>
					<div>Task name</div>
					<div>Due date</div>
					<div>Priority</div>
					<div></div>
				</div>
			</div>

			<div>
				{COLUMNS.map(column => (
					<ListRowParent
						items={items}
						label={column.label}
						value={column.value}
						setItems={setItems}
						key={column.value}
					/>
				))}
			</div>
		</DragDropContext>
	)
}
