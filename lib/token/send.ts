import type { User } from 'firebase/auth'

const sendToken = async (user: User | null) => {
	const response = await fetch('/api/token', {
		method: 'POST',
		headers: { 'content-type': 'application/json' },
		body: JSON.stringify(user && (await user.getIdToken(true)))
	})

	if (!response.ok) throw new Error(await response.text())
}

export default sendToken
