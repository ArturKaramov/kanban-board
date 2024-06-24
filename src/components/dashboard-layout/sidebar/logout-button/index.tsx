'use client'

import { useMutation } from '@tanstack/react-query'
import { LogOut } from 'lucide-react'
import { useRouter } from 'next/navigation'

import styles from './logout-button.module.css'
import { authService } from '@/services/auth.service'

export function LogoutButton() {
	const router = useRouter()
	const { mutate } = useMutation({
		mutationKey: ['logout'],
		mutationFn: () => authService.logout(),
		onSuccess: () => router.push('/auth')
	})

	return (
		<div className={styles.main}>
			<button
				className={styles.button}
				onClick={() => mutate()}
			>
				<LogOut size={20} />
			</button>
		</div>
	)
}
