<script lang="ts">
	import currentUser from '../../lib/user/current'
	import company from '../../lib/company/current'
	import companyOwner from '../../lib/company/owner'
	import formatDate from '../../lib/format/date'
</script>

{#if $company?.created != null}
	<h3>Since {formatDate($company.created)}</h3>
{/if}

{#if $companyOwner}
	<h3 data-self={$currentUser?.id === $companyOwner.id || undefined}>
		By {$companyOwner.name}
	</h3>
{/if}

<style lang="scss">
	@use 'shared/colors';

	h3 {
		margin-top: 0.5rem;
		font-size: 1.2rem;
		font-weight: 900;
		color: colors.$black;
	}

	[data-self]::after {
		content: ' (you)';
		opacity: 0.5;
	}
</style>
