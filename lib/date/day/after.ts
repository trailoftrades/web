import MILLISECONDS_IN_DAY from './milliseconds'

const daysAfter = (date: Date, days: number) =>
	new Date(date.getTime() + days * MILLISECONDS_IN_DAY)

export default daysAfter
