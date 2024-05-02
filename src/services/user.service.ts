import { IUser, TypeUserForm } from '@/types/auth.types'

import { axiosAuth } from '@/api/interceptors'

export interface IProfileResponse {
	user: IUser
	statistics: Array<{
		label: string
		value: string
	}>
}

class UserService {
	private BASE_URL = '/user/profile'

	async getProfile() {
		const res = await axiosAuth.get<IProfileResponse>(this.BASE_URL)
		return res.data
	}

	async update(data: TypeUserForm) {
		const res = await axiosAuth.put(this.BASE_URL, data)
		return res.data
	}
}

export const userService = new UserService()
