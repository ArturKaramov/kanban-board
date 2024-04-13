import {
	ITimeBlockResponse,
	TTimeBlockFormState
} from '@/types/time-block.types'

import { axiosAuth } from '@/api/interceptors'

class TimeBlockService {
	private BASE_URL = '/user/time-blocks'

	async getTimeBlocks() {
		const res = await axiosAuth.get<ITimeBlockResponse[]>(this.BASE_URL)
		return res
	}

	async createTimeBlock(data: TTimeBlockFormState) {
		const res = await axiosAuth.post(this.BASE_URL, data)
		return res
	}

	async updateOrderTimeBlock(ids: string[]) {
		const res = await axiosAuth.put(`${this.BASE_URL}/update-order`, { ids })
		return res
	}

	async updateTimeBlock(id: string, data: TTimeBlockFormState) {
		const res = await axiosAuth.put(`${this.BASE_URL}/${id}`, data)
		return res
	}

	async deleteTimeBlock(id: string) {
		const res = await axiosAuth.delete(`${this.BASE_URL}/${id}`)
		return res
	}
}

export const timeBlockService = new TimeBlockService()
