import { GanttChartSquare } from 'lucide-react'
import Link from 'next/link'

import { COLORS } from '@/constants/color.constants'

import { LogoutButton } from './logout-button'
import { MENU, MenuItem } from './menu'
import styles from './sidebar.module.css'

export function Sidebar() {
	return (
		<aside className={styles.aside}>
			<Link
				href='/auth'
				className={styles.link}
				draggable={false}
			>
				<GanttChartSquare
					color={COLORS.primary}
					size={38}
				/>
				<span className={styles.title}>Kanban</span>
			</Link>
			<div className={styles.menu}>
				<LogoutButton />
				{MENU.map(item => (
					<MenuItem
						item={item}
						key={item.link}
					/>
				))}
			</div>
		</aside>
	)
}
