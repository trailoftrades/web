<script lang="ts">
	import type User from '../../lib/user'
	import INITIAL_CASH from '../../lib/user/cash/initial'

	export let user: User
</script>

<div>
	<p class="name">{user.name ?? 'Anonymous'}</p>
	<p class="cash">${user.cash ?? INITIAL_CASH}</p>
</div>

<style lang="scss">
	div {
		display: flex;
	}

	.name {
		font-weight: 700;
	}
</style>
