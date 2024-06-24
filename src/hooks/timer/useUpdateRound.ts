import { useMutation, useQueryClient } from '@tanstack/react-query'

import { TTimerRoundState } from '@/types/timer.types'

import { timerService } from '@/services/timer.service'

export function useUpdateRound() {
	const queryClient = useQueryClient()

	const { mutate: updateRound, isPending: isUpdateRoundPending } = useMutation({
		mutationKey: ['updateRound'],
		mutationFn: ({ id, data }: { id: string; data: TTimerRoundState }) =>
			timerService.updateRound(id, data),
		onSuccess() {
			queryClient.invalidateQueries({ queryKey: ['getTodaySession'] })
		}
	})

	return { updateRound, isUpdateRoundPending }
}
