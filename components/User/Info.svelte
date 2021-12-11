<script lang="ts">
	import Down from 'svelte-icons/fa/FaChevronDown.svelte'

	import type User from '../../lib/user'
	import formatNumber from '../../lib/format/number'
	import INITIAL_CASH from '../../lib/user/cash/initial'
	import Dropdown from '../Dropdown.svelte'
	import Options from './Options.svelte'

	export let user: User
</script>

<Dropdown alignment="right">
	<button slot="trigger" let:show class="trigger" on:click={show}>
		<span class="name">{user.name ?? 'Anonymous'}</span>
		<span class="cash">{formatNumber(user.cash ?? INITIAL_CASH)}</span>
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
		color: colors.$black;
		background: white;
		border-radius: 0.5rem;
		transition: opacity 0.3s;

		&:hover {
			opacity: 0.7;
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
		color: colors.$success;

		&::before {
			content: '$';
		}
	}

	.trigger > :global(svg) {
		height: 1.2rem;
		margin-left: 0.8rem;
		transform: translateY(0.05rem);
	}
</style>
