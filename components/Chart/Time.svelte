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
	import Chart from './Base.svelte'

	export let points: Point[]
	export let unit: TimeUnit | null = 'day'
</script>

<Chart
	type="line"
	data={{
		datasets: [{ data: points }]
	}}
	options={{
		scales: {
			x: {
				type: 'time',
				time: { unit: unit ?? false }
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
