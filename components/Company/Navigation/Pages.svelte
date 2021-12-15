<script lang="ts">
	import Chart from 'svelte-icons/fa/FaChartLine.svelte'
	import Scroll from '../../../icons/Scroll.svelte'
	import Cash from 'svelte-icons/fa/FaHandHoldingUsd.svelte'

	import Page from './Page.svelte'
</script>

<div>
	<Page name="Evaluation">
		<Chart />
	</Page>
	<Page path="story" name="Story">
		<Scroll class="scroll" />
	</Page>
	<Page path="invest" name="Invest">
		<Cash />
	</Page>
</div>

<style lang="scss">
	div {
		flex-shrink: 0;
		display: flex;
		align-items: center;
		margin: 0 1rem;
	}

	div :global > a > svg.scroll {
		height: 1.4rem;
	}
</style>
