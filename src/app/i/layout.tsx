import { PropsWithChildren } from 'react'

import DashboardLayout from '@/components/dashboard-layout'

export default function Layout({ children }: PropsWithChildren<unknown>) {
	return <DashboardLayout>{children}</DashboardLayout>
}
