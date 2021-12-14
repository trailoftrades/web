<script lang="ts">
	import type { TimeUnit } from 'chart.js'
	import {
		LineController,
		LinearScale,
		TimeScale,
		PointElement,
		LineElement
	} from 'chart.js'
	import 'chartjs-adapter-date-fns'

	import type Point from '../../lib/point'
	import formatNumber from '../../lib/format/number'
	import Chart from './Base.svelte'

	export let points: Point[]
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

	const formatCash = (cash: string | number) =>
		`$${typeof cash === 'string' ? cash : formatNumber(cash)}`
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
				ticks: { ...ticks, callback: formatCash }
			}
		}
	}}
	components={[
		LineController,
		LinearScale,
		TimeScale,
		PointElement,
		LineElement
	]}
/>
