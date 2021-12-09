<script lang="ts">
	import currentUser from '../lib/user/current'
	import UserInfo from './User/Info.svelte'
	import SignIn from './User/SignIn.svelte'
</script>

<div class="root">
	<nav>
		<a href="/">Trail of Trades</a>
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
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
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
		align-self: flex-start;
		margin-right: 1rem;
		text-decoration: none;
		font-size: 2rem;
		font-weight: 900;
		color: white;
		text-shadow: 0.5rem 0.5rem 2rem transparentize(colors.$black, 0.6);
		transition: opacity 0.3s;

		&:hover {
			opacity: 0.5;
		}
	}
</style>
