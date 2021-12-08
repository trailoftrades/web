<script lang="ts">
	import _signIn from '../../lib/auth/sign/in'
	import handleError from '../../lib/error/handle'

	const signIn = () => _signIn().catch(handleError)
</script>

<button on:click={signIn}>Sign in</button>
