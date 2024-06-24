'use client'

import { FormProvider, useForm } from 'react-hook-form'

import type { TTimeBlockFormState } from '@/types/time-block.types'

import { TimeBlockingForm } from './form/TimeBlockingForm'
import { TimeBlockingList } from './time-blocking-list/TimeBlockingList'
import styles from './time-blocking.module.css'

export function TimeBlocking() {
	const methods = useForm<TTimeBlockFormState>()

	return (
		<FormProvider {...methods}>
			<div className={styles.main}>
				<TimeBlockingList />
				<TimeBlockingForm />
			</div>
		</FormProvider>
	)
}
