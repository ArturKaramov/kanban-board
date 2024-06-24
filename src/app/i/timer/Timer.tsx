'use client'

import { Loader, Pause, Play, RefreshCcw } from 'lucide-react'

import { Button } from '@/components/ui/buttons/Button'

import { useCreateSession } from '@/hooks/timer/useCreateSession'
import { useDeleteSession } from '@/hooks/timer/useDeleteSession'
import { useTimer } from '@/hooks/timer/useTimer'
import { useTimerActions } from '@/hooks/timer/useTimerActions'
import { useTodaySession } from '@/hooks/timer/useTodaySession'

import { formatTime } from './format-time'
import { TimerRounds } from './rounds/TimerRounds'
import styles from './timer.module.css'

export function Timer() {
	const timerState = useTimer()
	const { isLoading, sessionsResponse, workInterval } =
		useTodaySession(timerState)

	const rounds = sessionsResponse?.data.rounds
	const actions = useTimerActions({ ...timerState, rounds })

	const { isPending, mutate } = useCreateSession()
	const { deleteSession, isDeletePending } = useDeleteSession(() =>
		timerState.setSecondsLeft(workInterval * 60)
	)

	return (
		<div className={styles.main}>
			{!isLoading && (
				<span className={styles.text}>
					{formatTime(timerState.secondsLeft)}
				</span>
			)}
			{isLoading ? (
				<Loader />
			) : sessionsResponse?.data ? (
				<>
					<TimerRounds
						rounds={rounds}
						nextRoundHandler={actions.nextRoundHandler}
						prevRoundHandler={actions.prevRoundHandler}
						activeRound={timerState.activeRound}
					/>
					<button
						className={styles.playButton}
						onClick={
							timerState.isRunning ? actions.pauseHandler : actions.playHandler
						}
						disabled={actions.isUpdateRoundPending}
					>
						{timerState.isRunning ? <Pause size={30} /> : <Play size={30} />}
					</button>
					<button
						onClick={() => {
							timerState.setIsRunning(false)
							deleteSession(sessionsResponse.data.id)
						}}
						className={styles.refresh}
						disabled={isDeletePending}
					>
						<RefreshCcw size={19} />
					</button>
				</>
			) : (
				<Button
					onClick={() => mutate()}
					className={styles.createButton}
					disabled={isPending}
				>
					Create session
				</Button>
			)}
		</div>
	)
}
