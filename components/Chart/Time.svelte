<script lang="ts">
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
</script>

<Chart
	options={{
		type: 'line',
		data: {
			datasets: [{ data: points }]
		},
		options: {
			scales: {
				x: {
					// @ts-expect-error
					type: 'time',
					distribution: 'linear'
				}
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
