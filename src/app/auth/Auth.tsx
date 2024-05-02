'use client'

import { useMutation } from '@tanstack/react-query'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { toast } from 'sonner'

import { Button } from '@/components/ui/buttons/Button'
import { Field } from '@/components/ui/fields/Field'
import { Heading } from '@/components/ui/heading'

import { IAuthForm } from '@/types/auth.types'

import { DASHBOARD_PAGES } from '@/config/pages-url.config'

import styles from './auth.module.css'
import { authService } from '@/services/auth.service'

export function Auth() {
	const { register, handleSubmit, reset } = useForm<IAuthForm>({
		mode: 'onChange'
	})

	const [formType, setFormType] = useState<'login' | 'register'>('login')

	const { push } = useRouter()

	const { mutate } = useMutation({
		mutationKey: ['auth'],
		mutationFn: (data: IAuthForm) => authService.main(formType, data),
		onSuccess() {
			toast.success('Successfully login!')
			reset()
			push(DASHBOARD_PAGES.HOME)
		}
	})

	const onSubmit: SubmitHandler<IAuthForm> = data => {
		console.log('123')
		mutate(data)
	}

	return (
		<div className={styles.container}>
			<form
				className={styles.form}
				onSubmit={handleSubmit(onSubmit)}
			>
				<Heading title='Авторизуйтесь' />
				<Field
					id='email'
					label='Email:'
					placeholder='Введите email:'
					type='email'
					extra='mb-4'
					{...register('email', { required: 'Email is required' })}
				/>

				<Field
					id='password'
					label='Пароль:'
					placeholder='Введите пароль:'
					type='password'
					extra='mb-4'
					{...register('password', { required: 'Password is required' })}
				/>

				<div className={styles.buttons}>
					<Button
						type='submit'
						onClick={() => setFormType('login')}
					>
						Войти
					</Button>
					<Button
						type='submit'
						onClick={() => setFormType('register')}
					>
						Зарегистрироваться
					</Button>
				</div>
			</form>
		</div>
	)
}
