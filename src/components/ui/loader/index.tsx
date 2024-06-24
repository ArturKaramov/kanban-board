import { Loader as LoaderIcon } from 'lucide-react'

import styles from './loader.module.css'

const Loader = () => {
	return (
		<div className={styles.loader}>
			<LoaderIcon className={styles.icon} />
		</div>
	)
}

export default Loader
