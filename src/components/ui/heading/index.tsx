import styles from './heading.module.css'

interface IHeading {
	title: string
}

export function Heading({ title }: IHeading) {
	return <h1 className={styles.heading}>{title}</h1>
}
