import type { User } from 'firebase/auth'

import HttpError from '../error/http'

const sendToken = async (user: User | null) => {
	const response = await fetch('/api/token', {
		method: 'POST',
		headers: { 'content-type': 'application/json' },
		body: JSON.stringify(user && (await user.getIdToken(true)))
	})

	if (!response.ok) throw await HttpError.fromResponse(response)
}

export default sendToken
