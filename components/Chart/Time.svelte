<script lang="ts">
	import type { TimeUnit } from 'chart.js'
	import {
		LineController,
		LinearScale,
		TimeScale,
		PointElement,
		LineElement,
		Tooltip
	} from 'chart.js'
	import 'chartjs-adapter-date-fns'

	import type Point from '../../lib/point'
	import formatDate from '../../lib/format/date'
	import Chart from './Base.svelte'

	export let points: Point[]
	export let label: (value: number) => string

	export let unit: TimeUnit | null = 'day'

	export let fontFamily =
		"-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif"

	export let fontSize: number | undefined = undefined
	export let fontWeight: string | undefined = undefined
	export let textColor: string | undefined = undefined
	export let backgroundColor: string | undefined = undefined
	export let borderColor: string | undefined = undefined
	export let borderWidth: number | undefined = undefined

	$: ticks = {
		color: textColor,
		font: {
			family: fontFamily,
			size: fontSize,
			weight: fontWeight
		}
	}

	$: tooltipLabel = {
		backgroundColor: backgroundColor ?? 'white',
		borderColor: borderColor ?? 'white',
		borderWidth: 0
	}

	const formatLabel = (value: string | number) =>
		typeof value === 'string' ? value : label(value)
</script>

<Chart
	type="line"
	data={{
		datasets: [{ data: points, backgroundColor, borderColor, borderWidth }]
	}}
	options={{
		scales: {
			x: {
				type: 'time',
				time: { unit: unit ?? false },
				ticks
			},
			y: {
				ticks: { ...ticks, callback: formatLabel }
			}
		},
		plugins: {
			tooltip: {
				callbacks: {
					title: ([{ parsed }]) => formatDate(parsed.x, true),
					label: ({ parsed }) => formatLabel(parsed.y),
					labelColor: () => tooltipLabel
				}
			}
		}
	}}
	components={[
		LineController,
		LinearScale,
		TimeScale,
		PointElement,
		LineElement,
		Tooltip
	]}
/>
