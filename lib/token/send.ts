const sendToken = async (token: string) => {
	const response = await fetch('/token', { method: 'POST', body: token })
	if (!response.ok) throw new Error(await response.text())
}

export default sendToken
