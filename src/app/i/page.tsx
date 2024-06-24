import type { Metadata } from 'next'

import { Heading } from '@/components/ui/heading'

import { NO_INDEX_PAGE } from '@/constants/seo.constants'

import { Statistics } from './statistics/Statistics'

export const metadata: Metadata = {
	title: 'Dashboard',
	...NO_INDEX_PAGE
}

export default function DashboardPage() {
	return (
		<div>
			<Heading title='Статистика' />
			<Statistics />
		</div>
	)
}
