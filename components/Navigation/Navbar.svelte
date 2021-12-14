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

<nav bind:this={root}>
	<a href="/">Trail of Trades</a>
	<Filters />
	{#if $currentUser}
		<UserInfo user={$currentUser} />
	{:else}
		<SignIn />
	{/if}
</nav>

<style lang="scss">
	@use 'shared/colors';
	@use 'shared/z-index';

	nav {
		$max-width: 87.5rem;
		$horizontal-padding: 1.5rem;

		flex-shrink: 0;
		display: flex;
		justify-content: space-between;
		align-items: center;
		position: relative;
		max-width: $max-width + $horizontal-padding * 2;
		width: 100%;
		margin: 0 auto;
		padding: 1rem $horizontal-padding;
		z-index: z-index.$navigation;
	}

	a {
		flex-shrink: 0;
		align-self: flex-start;
		white-space: nowrap;
		text-decoration: none;
		font-size: 2rem;
		font-weight: 900;
		color: white;
		text-shadow: 0.5rem 0.5rem 2rem rgba(colors.$black, 0.4);
		transition: opacity 0.3s;

		&:hover {
			opacity: 0.7;
		}
	}
</style>
