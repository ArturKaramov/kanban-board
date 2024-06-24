import type { PropsWithChildren } from 'react'

import styles from './dashboard-layout.module.css'
import { Header } from './header'
import { Sidebar } from './sidebar'

export default function DashboardLayout({
	children
}: PropsWithChildren<unknown>) {
	return (
		<div className={styles.container}>
			<Sidebar />

			<main className={styles.main}>
				<Header />
				{children}
			</main>
		</div>
	)
}
