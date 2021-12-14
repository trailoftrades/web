export default class HttpError extends Error {
	constructor(public code: number, message: string) {
		super(message)
	}

	static fromResponse = async (response: Response) =>
		new HttpError(response.status, await response.text())
}
