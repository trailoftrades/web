<script lang="ts">
	import SignIn from './Auth/SignIn.svelte'
</script>

<nav>
	<a href="/">Trail of Trades</a>
	<SignIn />
</nav>

<style lang="scss">
	nav {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	a {
		margin-right: 1rem;
		text-decoration: none;
		font-size: 2rem;
		font-weight: 900;
		color: black;
	}
</style>
