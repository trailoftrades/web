<script lang="ts">
	import {
		Chart,
		LineController,
		CategoryScale,
		LinearScale,
		PointElement,
		LineElement
	} from 'chart.js'

	let canvas: HTMLCanvasElement | null = null

	$: if (canvas) {
		Chart.register(
			LineController,
			CategoryScale,
			LinearScale,
			PointElement,
			LineElement
		)

		new Chart(canvas, {
			type: 'line',
			data: {
				labels: ['a', 'b', 'c', 'd', 'e', 'f', 'g'],
				datasets: [
					{
						data: [1, 2, 3, 4, 5, 6, 1, 2, 3, 4, 5, 6]
					}
				]
			}
		})
	}
</script>

<canvas bind:this={canvas} />
