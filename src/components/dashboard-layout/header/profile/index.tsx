'use client'

import Loader from '@/components/ui/loader'

import { useProfile } from '@/hooks/useProfile'

import styles from './profile.module.css'

export function Profile() {
	const { data, isLoading } = useProfile()

	return (
		<div className={styles.main}>
			{isLoading ? (
				<Loader />
			) : (
				<div className={styles.content}>
					<div className={styles.data}>
						<p className={styles.name}>{data?.user.name}</p>
						<p className={styles.email}>{data?.user.email}</p>
					</div>

					<div className={styles.letter}>
						{data?.user.name?.charAt(0) || 'A'}
					</div>
				</div>
			)}
		</div>
	)
}
