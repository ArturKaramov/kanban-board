'use client'

import cn from 'clsx'
import { Kanban, ListTodo } from 'lucide-react'

import type { TypeView } from '../tasks-view/TasksView'

import styles from './switcher.module.css'

interface ISwitcherView {
	type: TypeView
	setType: (value: TypeView) => void
}

export function SwitcherView({ setType, type }: ISwitcherView) {
	return (
		<div className={styles.switcher}>
			<button
				className={cn(styles.button, type === 'list' && styles.active)}
				onClick={() => setType('list')}
			>
				<ListTodo />
				List
			</button>
			<button
				className={cn(styles.button, type === 'kanban' && styles.active)}
				onClick={() => setType('kanban')}
			>
				<Kanban />
				Board
			</button>
		</div>
	)
}
