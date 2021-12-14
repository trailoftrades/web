const formatter = Intl.DateTimeFormat('en-US', {
	year: 'numeric',
	month: 'long',
	day: 'numeric'
})

const formatDate = (date: Date | number) => formatter.format(date)

export default formatDate
