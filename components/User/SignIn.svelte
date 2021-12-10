<script lang="ts">
	import handleError from '../../lib/error/handle'

	let loading = false

	const signIn = async () => {
		try {
			if (loading) return
			loading = true

			const { default: signIn } = await import('../../lib/user/sign/in')
			await signIn()
		} catch (error) {
			loading = false
			handleError(error)
		}
	}
</script>

<button disabled={loading} on:click={signIn}>Sign in</button>

<style lang="scss">
	@use 'shared/colors';

	button {
		padding: 0.6rem 1.2rem;
		font-weight: 700;
		color: colors.$black;
		background: white;
		border-radius: 0.5rem;
		transition: opacity 0.3s;

		&:hover {
			opacity: 0.7;
		}
	}

	:disabled {
		pointer-events: none;
	}
</style>
