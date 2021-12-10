<script lang="ts">
	import SignOut from 'svelte-icons/fa/FaSignOutAlt.svelte'

	import handleError from '../../lib/error/handle'
	import Option from './Option.svelte'

	let signOutLoading = false

	const signOut = async () => {
		try {
			if (signOutLoading) return
			signOutLoading = true

			const { default: signOut } = await import('../../lib/user/sign/out')
			await signOut()
		} catch (error) {
			signOutLoading = false
			handleError(error)
		}
	}
</script>

<table>
	<tbody>
		<Option danger loading={signOutLoading} on:click={signOut}>
			<SignOut slot="icon" />
			Sign out
		</Option>
	</tbody>
</table>

<style lang="scss">
	@use 'shared/colors';

	table {
		min-width: 100%;
		background: white;
		border-spacing: 0.8rem 0.5rem;
		border-radius: 0.5rem;
		box-shadow: 0 0.5rem 1.5rem 0 transparentize(colors.$black, 0.9);
	}
</style>
