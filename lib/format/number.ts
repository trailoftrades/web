const formatter = Intl.NumberFormat('en-US')

const formatNumber = (number: number) => formatter.format(number)

export default formatNumber
