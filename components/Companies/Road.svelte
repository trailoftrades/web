<script lang="ts" context="module">
	export const position = writable<DOMRect | null>(null)
</script>

<script lang="ts">
	import { writable } from 'svelte/store'

	import resize from '../../lib/resize'

	let top: HTMLElement | null = null
	$: $position = ($resize, top && top.getBoundingClientRect())
</script>

<div class="root">
	<div class="top" bind:this={top} />
</div>

<style lang="scss">
	@use 'shared/colors';

	$distance: 50vw;

	.root {
		flex-shrink: 0;
		position: relative;
		height: 10rem;
		margin: 0 1.25rem 3.13rem;
		background: colors.$dark-gray;
		box-shadow: 0 2rem 2rem 1rem rgba(colors.$black, 0.5);
		transform: perspective($distance) rotateX(40deg);
		transform-origin: bottom;

		&::before {
			$line-width: 7.5rem;

			content: '';
			position: absolute;
			top: 50%;
			left: 0;
			width: 100%;
			height: 0.63rem;
			background: linear-gradient(
				90deg,
				white 0%,
				white 70%,
				transparent 70%,
				transparent 100%
			);
			background-size: $line-width;
			transform: translateY(-50%);
			animation: move 0.5s linear infinite;

			@keyframes move {
				from {
					background-position: 0;
				}

				to {
					background-position: -$line-width;
				}
			}
		}

		&::after {
			$height: 1.88rem;

			content: '';
			position: absolute;
			bottom: -$height;
			left: 0;
			right: 0;
			width: 100%;
			height: $height;
			background: colors.$darker-gray;
			transform: perspective($distance) rotateX(-30deg);
			transform-origin: top;
		}
	}

	.top {
		width: 100%;
	}
</style>
