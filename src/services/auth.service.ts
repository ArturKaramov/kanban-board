import { IAuthResponse } from '@/types/auth.types'

import { axiosBase } from '@/api/interceptors'

import { IAuthForm } from '../types/auth.types'

import { removeFromStorage, saveTokenStorage } from './auth-token.service'

export const authService = {
	async main(type: 'login' | 'register', data: IAuthForm) {
		const res = await axiosBase.post<IAuthResponse>(`/auth/${type}`, data)

		if (res.data.accessToken) saveTokenStorage(res.data.accessToken)

		return res
	},

	async getNewTokens() {
		const res = await axiosBase.post<IAuthResponse>('/auth/login/access-token')

		if (res.data.accessToken) saveTokenStorage(res.data.accessToken)

		return res
	},

	async logout() {
		const res = await axiosBase.post<boolean>('/auth/logout')

		if (res.data) removeFromStorage()

		return res
	}
}
