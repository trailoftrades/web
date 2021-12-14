<script lang="ts">
	import type {
		ChartType,
		ChartConfiguration,
		ChartComponentLike
	} from 'chart.js'
	import { Chart } from 'chart.js'

	type Type = $$Generic

	export let options: ChartConfiguration<Type & ChartType>
	let previousOptions = options

	export let components: ChartComponentLike[]

	let canvas: HTMLCanvasElement | null = null
	let chart: Chart<Type & ChartType> | null = null

	$: if (canvas) Chart.register(...components)
	$: if (canvas && !chart) chart = new Chart(canvas, options)

	$: {
		console.log('options changed:', options !== previousOptions)
		previousOptions = options
	}
</script>

<canvas bind:this={canvas} />
