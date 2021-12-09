<script lang="ts">
	import Down from 'svelte-icons/fa/FaChevronDown.svelte'

	import type User from '../../lib/user'
	import INITIAL_CASH from '../../lib/user/cash/initial'
	import Dropdown from '../Dropdown.svelte'
	import Options from './Options.svelte'

	export let user: User
</script>

<Dropdown alignment="right">
	<button slot="trigger" let:show class="trigger" on:click={show}>
		<span class="name">{user.name ?? 'Anonymous'}</span>
		<span class="cash">${user.cash ?? INITIAL_CASH}</span>
		<Down />
	</button>
	<Options />
</Dropdown>

<style lang="scss">
	@use 'shared/colors';

	.trigger {
		display: flex;
		align-items: center;
		padding: 0.5rem 1rem;
		font-weight: 700;
		background: white;
		border-radius: 0.5rem;
		box-shadow: 0 0 0.31rem 0 transparentize(black, 0.9);
		transition: box-shadow 0.3s;

		&:hover {
			box-shadow: 0 0 1.25rem 0.31rem transparentize(black, 0.9);
		}
	}

	.name,
	.cash {
		flex-shrink: 0;
	}

	.name {
		margin-right: 0.5rem;
	}

	.cash {
		color: colors.$green;
	}

	.trigger > :global(svg) {
		height: 1.2rem;
		margin-left: 0.8rem;
		transform: translateY(0.05rem);
	}
</style>
