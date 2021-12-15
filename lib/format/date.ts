import sameDay from '../date/day/same'
import daysAfter from '../date/day/after'

const dateFormatter = Intl.DateTimeFormat('en-US', {
	year: 'numeric',
	month: 'long',
	day: 'numeric'
})

const timeFormatter = Intl.DateTimeFormat('en-US', {
	timeStyle: 'short'
})

const formatOnlyDate = (date: Date, relative = new Date()) => {
	if (sameDay(date, relative)) return 'Today'
	if (sameDay(daysAfter(date, 1), relative)) return 'Yesterday'

	return dateFormatter.format(date)
}

const formatDate = (date: Date | number, time = false) => {
	const value = typeof date === 'number' ? new Date(date) : date

	return `${formatOnlyDate(value)}${
		time ? ` at ${timeFormatter.format(value)}` : ''
	}`
}

export default formatDate
