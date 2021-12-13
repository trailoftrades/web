<script lang="ts" context="module">
	export const position = writable<DOMRect | null>(null)
</script>

<script lang="ts">
	import { writable } from 'svelte/store'

	import resize from '../../lib/resize'
	import currentUser from '../../lib/user/current'
	import Filters from './Filters.svelte'
	import UserInfo from '../User/Info.svelte'
	import SignIn from '../User/SignIn.svelte'

	let root: HTMLElement | null = null
	$: $position = ($resize, root && root.getBoundingClientRect())
</script>

<div class="root" bind:this={root}>
	<nav>
		<a href="/">Trail of Trades</a>
		<Filters />
		{#if $currentUser}
			<UserInfo user={$currentUser} />
		{:else}
			<SignIn />
		{/if}
	</nav>
</div>

<style lang="scss">
	@use 'shared/colors';
	@use 'shared/z-index';

	.root {
		flex-shrink: 0;
		position: relative;
		padding: 1rem 1.5rem;
		z-index: z-index.$navigation;
	}

	nav {
		display: flex;
		justify-content: space-between;
		align-items: center;
		max-width: 62.5rem;
		margin: 0 auto;
	}

	a {
		flex-shrink: 0;
		align-self: flex-start;
		text-decoration: none;
		font-size: 2rem;
		font-weight: 900;
		color: white;
		text-shadow: 0.5rem 0.5rem 2rem transparentize(colors.$black, 0.6);
		transition: opacity 0.3s;

		&:hover {
			opacity: 0.7;
		}
	}
</style>
