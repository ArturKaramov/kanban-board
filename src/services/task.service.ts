import { ITaskResponse, TypeTaskFormState } from '@/types/task.types'

import { axiosAuth } from '@/api/interceptors'

class TaskService {
	private BASE_URL = 'user/tasks'

	async getTasks() {
		const res = await axiosAuth.get<ITaskResponse[]>(this.BASE_URL)
		return res
	}

	async createTask(data: TypeTaskFormState) {
		const res = await axiosAuth.post(this.BASE_URL, data)
		return res
	}

	async updateTask(id: string, data: TypeTaskFormState) {
		const res = await axiosAuth.put(`${this.BASE_URL}/${id}`, data)
		return res
	}

	async deleteTask(id: string) {
		const res = await axiosAuth.delete(`${this.BASE_URL}/${id}`)
		return res
	}
}

export const taskService = new TaskService()
