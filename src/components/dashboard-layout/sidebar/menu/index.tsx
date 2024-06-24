import {
	CalendarRange,
	KanbanSquare,
	LayoutDashboard,
	type LucideIcon,
	Settings,
	Timer
} from 'lucide-react'
import Link from 'next/link'

import { DASHBOARD_PAGES } from '@/config/pages-url.config'

import styles from './menu.module.css'

export interface IMenuItem {
	link: string
	name: string
	icon: LucideIcon
}

export const MENU: IMenuItem[] = [
	{ icon: LayoutDashboard, link: DASHBOARD_PAGES.HOME, name: 'Dashboard' },
	{ icon: KanbanSquare, link: DASHBOARD_PAGES.TASKS, name: 'Tasks' },
	{ icon: Timer, link: DASHBOARD_PAGES.TIMER, name: 'Timer' },
	{
		icon: CalendarRange,
		link: DASHBOARD_PAGES.TIME_BLOCKING,
		name: 'Time blocking'
	},

	{ icon: Settings, link: DASHBOARD_PAGES.SETTINGS, name: 'Settings' }
]

export function MenuItem({ item }: { item: IMenuItem }) {
	return (
		<div>
			<Link
				href={item.link}
				className={styles.menu}
			>
				<item.icon />
				<span>{item.name}</span>
			</Link>
		</div>
	)
}
