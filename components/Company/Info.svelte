<script lang="ts">
	import currentUser from '../../lib/user/current'
	import company from '../../lib/company/current'
	import companyOwner from '../../lib/company/owner'
	import formatDate from '../../lib/format/date'
</script>

<div>
	<h1>{$company?.name ?? 'Company not found'}</h1>
	{#if $company?.created != null}
		<h3>Since {formatDate($company.created)}</h3>
	{/if}
	{#if $companyOwner}
		<h3 data-self={$currentUser?.id === $companyOwner.id}>
			By {$companyOwner.name}
		</h3>
	{/if}
</div>

<style lang="scss">
	@use 'shared/colors';

	div {
		color: colors.$black;
	}

	h1 {
		font-size: 3rem;
		font-weight: 900;
	}
</style>
