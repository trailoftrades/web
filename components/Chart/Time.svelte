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

	let canvas: HTMLCanvasElement | null = null
	$: style = canvas && getComputedStyle(canvas)

	const fromStyle = (key: string) =>
		style?.getPropertyValue(`--chart-${key}`) || undefined
</script>

<Chart
	type="line"
	data={{
		datasets: [
			{
				data: points,
				backgroundColor: fromStyle('background-color'),
				borderColor: fromStyle('border-color')
			}
		]
	}}
	options={{
		scales: {
			x: {
				type: 'time',
				time: {
					unit: unit ?? false
				},
				ticks: {
					color: fromStyle('text-color'),
					font: {
						weight: fromStyle('font-weight')
					}
				}
			},
			y: {
				ticks: {
					color: fromStyle('text-color'),
					font: {
						weight: fromStyle('font-weight')
					},
					callback: value =>
						`$${typeof value === 'string' ? value : formatNumber(value)}`
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
	bind:canvas
/>
