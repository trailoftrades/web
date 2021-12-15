<script lang="ts">
	import minutes from '../../lib/date/minutes'

	$: progress = $minutes / 60

	$: current = progress * 100
	$: remaining = (1 - progress) * 100
</script>

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
	<defs>
		<linearGradient
			id="company-rate-indicator-progress"
			gradientTransform="rotate(90)"
		>
			<stop offset="{remaining.toFixed(2)}%" stop-color="#9c9c9e" />
			<stop offset="{current.toFixed(2)}%" stop-color="#12b412" />
		</linearGradient>
	</defs>
	<g fill="url(#company-rate-indicator-progress)">
		<circle cx={256} cy={256} r={256} opacity={0.4} />
		<path
			d="M256 504c137 0 248-111 248-248S393 8 256 8 8 119 8 256s111 248 248 248zm0-448c110.5 0 200 89.5 200 200s-89.5 200-200 200S56 366.5 56 256 145.5 56 256 56zm20 328h-40c-6.6 0-12-5.4-12-12V256h-67c-10.7 0-16-12.9-8.5-20.5l99-99c4.7-4.7 12.3-4.7 17 0l99 99c7.6 7.6 2.2 20.5-8.5 20.5h-67v116c0 6.6-5.4 12-12 12z"
		/>
	</g>
</svg>
