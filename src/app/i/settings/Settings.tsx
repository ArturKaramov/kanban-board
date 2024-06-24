'use client'

import { SubmitHandler, useForm } from 'react-hook-form'

import { Button } from '@/components/ui/buttons/Button'
import { Field } from '@/components/ui/fields/Field'

import { TypeUserForm } from '@/types/auth.types'

import { useInitialData } from '@/hooks/useInitialData'
import { useUpdateSettings } from '@/hooks/useUpdateSettings'

import styles from './settings.module.css'

export function Settings() {
	const { register, handleSubmit, reset } = useForm<TypeUserForm>({
		mode: 'onChange'
	})

	useInitialData(reset)
	const { mutate, isPending } = useUpdateSettings()

	const onSubmit: SubmitHandler<TypeUserForm> = data => {
		const { password, ...rest } = data

		mutate({ ...rest, password: password || undefined })
	}

	return (
		<div>
			<form
				className={styles.form}
				onSubmit={handleSubmit(onSubmit)}
			>
				<div className={styles.container}>
					<div>
						<Field
							InputLabelProps={{ shrink: true }}
							id='email'
							label='Email:'
							placeholder='Введите email:'
							type='email'
							{...register('email', {
								required: 'Email is required!'
							})}
							extra={styles.margin}
						/>

						<Field
							InputLabelProps={{ shrink: true }}
							id='name'
							label='Имя:'
							placeholder='Введите имя:'
							{...register('name')}
							extra={styles.margin}
						/>

						<Field
							id='password'
							label='Пароль:'
							placeholder='Введите пароль:'
							type='password'
							{...register('password')}
							extra={styles.margin}
						/>
					</div>

					<div>
						<Field
							InputLabelProps={{ shrink: true }}
							id='workInterval'
							label='Интервал работы (мин.): '
							placeholder='Введите интервал работы (мин.): '
							isNumber
							{...register('workInterval', {
								valueAsNumber: true
							})}
							extra={styles.margin}
						/>

						<Field
							InputLabelProps={{ shrink: true }}
							id='breakInterval'
							label='Интервал отдыха (мин.):'
							placeholder='Введите интервал отдыха (мин.):'
							isNumber
							{...register('breakInterval', {
								valueAsNumber: true
							})}
							extra={styles.margin}
						/>

						<Field
							InputLabelProps={{ shrink: true }}
							id='intervalsCount'
							label='Количество интервалов (max 10): '
							placeholder='Введите количество интервалов (max 10): '
							isNumber
							{...register('intervalsCount', {
								valueAsNumber: true
							})}
							extra={styles.margin}
						/>
					</div>
				</div>

				<Button
					type='submit'
					disabled={isPending}
				>
					Сохранить
				</Button>
			</form>
		</div>
	)
}
