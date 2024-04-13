import { ITimerSessionResponse, TTimerRoundState } from '@/types/timer.types'

import { axiosAuth } from '@/api/interceptors'

class TimerService {
	private BASE_URL = '/user/timer'

	async getTodaySession() {
		const res = await axiosAuth.get<ITimerSessionResponse>(
			`${this.BASE_URL}/today`
		)

		return res
	}

	async createSession() {
		const res = await axiosAuth.post<ITimerSessionResponse>(this.BASE_URL)
		return res
	}

	async deleteSession(id: string) {
		const res = await axiosAuth.delete(`${this.BASE_URL}/${id}`)
		return res
	}

	async updateRound(id: string, data: TTimerRoundState) {
		const res = await axiosAuth.put(`${this.BASE_URL}/round/${id}`, data)
		return res
	}
}

export const timerService = new TimerService()
