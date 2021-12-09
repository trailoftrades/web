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
	.root {
		padding: 1rem 1.5rem;
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
		line-height: 1;
		text-decoration: none;
		font-size: 2rem;
		font-weight: 900;
		color: black;
		transition: opacity 0.3s;

		&:hover {
			opacity: 0.5;
		}
	}
</style>
