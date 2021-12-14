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
	<div
		class="content"
		aria-hidden={!active || undefined}
		data-alignment={alignment}
		bind:this={content}
	>
		<slot />
	</div>
</div>

<style lang="scss">
	@use 'shared/z-index';

	.root {
		position: relative;
	}

	.active::before {
		content: '';
		position: fixed;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
		z-index: 1;
	}

	.content {
		position: absolute;
		top: 100%;
		min-width: 100%;
		margin-top: 0.5rem;
		z-index: z-index.$dropdown;
		transition: transform 0.3s, opacity 0.3s;
	}

	[aria-hidden] {
		pointer-events: none;
		transform: translateX(2rem);
		opacity: 0;
	}

	[data-alignment='left'] {
		left: 0;
	}

	[data-alignment='right'] {
		right: 0;
	}
</style>
