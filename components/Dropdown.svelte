<script lang="ts">
	export let alignment: 'left' | 'right'

	let active = false
	let content: HTMLElement | null = null

	const show = (event: MouseEvent) => {
		event.stopPropagation()
		active = true
	}

	const dismiss = ({ target }: MouseEvent) => {
		active =
			content && target
				? content === target || content.contains(target as Node)
				: false
	}
</script>

<svelte:window on:click={active ? dismiss : undefined} />

<div class="root" class:active>
	<slot name="trigger" {show} />
	<div class="content" data-alignment={alignment} bind:this={content}>
		<slot />
	</div>
</div>

<style lang="scss">
	.root {
		position: relative;

		&::before {
			content: '';
			position: fixed;
			top: 0;
			right: 0;
			bottom: 0;
			left: 0;
			pointer-events: none;
		}
	}

	.active::before {
		pointer-events: all;
	}

	.content {
		position: absolute;
		top: 100%;
		min-width: 100%;
		margin-top: 0.5rem;
		pointer-events: none;
		transform: translateX(2rem);
		opacity: 0;
		transition: transform 0.3s, opacity 0.3s;

		.active & {
			pointer-events: all;
			transform: none;
			opacity: 1;
		}
	}

	[data-alignment='left'] {
		left: 0;
	}

	[data-alignment='right'] {
		right: 0;
	}
</style>
