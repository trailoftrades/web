<script lang="ts">
	export let danger = false

	export let loading = false
	export let disabled = false
</script>

<tr
	role="button"
	class:danger
	aria-busy={loading}
	aria-disabled={disabled}
	on:click
>
	<td class="icon">
		<slot name="icon" />
	</td>
	<td class="content">
		<slot />
	</td>
</tr>

<style lang="scss">
	@use 'shared/colors';

	tr {
		transition: opacity 0.3s;

		&:hover {
			opacity: 0.5;
		}
	}

	.danger {
		color: colors.$red;
	}

	[aria-busy='true'],
	[aria-disabled='true'] {
		pointer-events: none;
	}

	[aria-disabled='true'] {
		opacity: 0.5;
	}

	.icon > :global(svg) {
		width: 1.2rem;
	}

	.content {
		width: 100%;
		font-weight: 700;
	}
</style>
