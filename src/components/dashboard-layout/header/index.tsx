import { GlobalLoader } from './global-loader'
import { Profile } from './profile'

export function Header() {
	return (
		<header>
			<GlobalLoader />
			<Profile />
		</header>
	)
}
