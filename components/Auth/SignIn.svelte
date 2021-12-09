<script lang="ts">
	import _signIn from '../../lib/auth/sign/in'
	import handleError from '../../lib/error/handle'

	const signIn = () => _signIn().catch(handleError)
</script>

<button on:click={signIn}>Sign in</button>

<style lang="scss">
	button {
		padding: 0.5rem 1rem;
		font-weight: 700;
		background: white;
		border-radius: 0.5rem;
		box-shadow: 0 0 20px 5px transparentize(black, 0.9);
		transition: box-shadow 0.3s;

		&:hover {
			box-shadow: 0 0 5px 0 transparentize(black, 0.9);
		}
	}
</style>
