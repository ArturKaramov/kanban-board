'use client'

import Loader from '@/components/ui/loader'

import { useProfile } from '@/hooks/useProfile'

import styles from './statistics.module.css'

export function Statistics() {
	const { data, isLoading } = useProfile()

	return isLoading ? (
		<Loader />
	) : (
		<div className={styles.grid}>
			{data?.statistics.length ? (
				data.statistics.map(statistic => (
					<div
						className={styles.card}
						key={statistic.label}
					>
						<div className={styles.label}>{statistic.label}</div>
						<div className={styles.value}>{statistic.value}</div>
					</div>
				))
			) : (
				<div>Statistics not loaded!</div>
			)}
		</div>
	)
}
