import { readable } from 'svelte/store'

const getMinutes = (date = new Date()) =>
	date.getMinutes() + date.getSeconds() / 60

const minutes = readable(0, set => {
	set(getMinutes())

	const interval = setInterval(() => set(getMinutes()), 5000)
	return () => clearInterval(interval)
})

export default minutes
