import { readable } from 'svelte/store'

const getMinutes = (date = new Date()) =>
	date.getMinutes() + date.getSeconds() / 60

const minutes = readable(getMinutes(), set => {
	const interval = setInterval(() => set(getMinutes()), 5000)
	return () => clearInterval(interval)
})

export default minutes
