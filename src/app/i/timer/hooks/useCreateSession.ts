import { useMutation, useQueryClient } from '@tanstack/react-query'

import { timerService } from '@/services/timer.service'

export function useCreateSession() {
	const queryClient = useQueryClient()

	const { mutate, isPending } = useMutation({
		mutationKey: ['createNewSession'],
		mutationFn: () => timerService.createSession(),
		onSuccess() {
			queryClient.invalidateQueries({
				queryKey: ['getTodaySession']
			})
		}
	})

	return { mutate, isPending }
}
