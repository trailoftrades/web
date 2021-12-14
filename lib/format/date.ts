const dateFormatter = Intl.DateTimeFormat('en-US', {
	year: 'numeric',
	month: 'long',
	day: 'numeric'
})

const timeFormatter = Intl.DateTimeFormat('en-US', {
	timeStyle: 'short'
})

const formatDate = (date: Date | number, time = false) =>
	`${dateFormatter.format(date)}${
		time ? ` at ${timeFormatter.format(date)}` : ''
	}`

export default formatDate
