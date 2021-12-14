<script lang="ts">
	import type {
		ChartType,
		ChartData,
		ChartOptions,
		ChartComponentLike
	} from 'chart.js'
	import { Chart } from 'chart.js'

	type AnyType = $$Generic
	type Type = AnyType & ChartType

	export let type: Type

	export let data: ChartData<Type>
	let previousData = data

	export let options: ChartOptions<Type> | undefined = undefined
	let previousOptions = options

	export let components: ChartComponentLike[]

	let canvas: HTMLCanvasElement | null = null
	let chart: Chart<Type> | null = null

	$: if (canvas) Chart.register(...components)
	$: if (canvas && !chart) chart = new Chart(canvas, { type, data, options })

	$: if (chart) {
		let changed = false

		if (data !== previousData) {
			chart.data = previousData = data
			changed = true
		}

		if (options !== previousOptions) {
			previousOptions = options

			if (options) {
				chart.options = options
				changed = true
			}
		}

		if (changed) chart.update()
	}
</script>

<canvas bind:this={canvas} />
