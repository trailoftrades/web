<script lang="ts">
	import type {
		ChartType,
		ChartConfiguration,
		ChartComponentLike
	} from 'chart.js'
	import { Chart } from 'chart.js'

	type _Type = $$Generic
	type Type = _Type & ChartType

	export let options: ChartConfiguration<Type>
	let previousOptions = options

	export let components: ChartComponentLike[]

	let canvas: HTMLCanvasElement | null = null
	let chart: Chart<Type> | null = null

	$: if (canvas) Chart.register(...components)
	$: if (canvas && !chart) chart = new Chart(canvas, options)

	$: if (options !== previousOptions) {
		update()
		previousOptions = options
	}

	const update = () => {
		if (!chart) return

		let changed = false

		if (options.data !== previousOptions.data) {
			chart.data = options.data
			changed = true
		}

		if (options.options && options.options !== previousOptions.options) {
			chart.options = options.options
			changed = true
		}

		if (changed) chart.update()
	}
</script>

<canvas bind:this={canvas} />
