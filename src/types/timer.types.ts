import type { Dispatch, SetStateAction } from 'react'

import type { IBase } from './root.types'

export interface ITimerRoundResponse extends IBase {
	isCompleted?: boolean
	totalSeconds: number
}

export interface ITimerSessionResponse extends IBase {
	isCompleted?: boolean
	rounds?: ITimerRoundResponse[]
}

export type TTimerSessionState = Partial<
	Omit<ITimerSessionResponse, 'id' | 'createdAt' | 'updatedAt'>
>

export type TTimerRoundState = Partial<
	Omit<ITimerRoundResponse, 'id' | 'createdAt' | 'updatedAt'>
>

export interface ITimerState {
	isRunning: boolean
	secondsLeft: number
	activeRound: ITimerRoundResponse | undefined

	setIsRunning: Dispatch<SetStateAction<boolean>>
	setSecondsLeft: Dispatch<SetStateAction<number>>
	setActiveRound: Dispatch<SetStateAction<ITimerRoundResponse | undefined>>
}
