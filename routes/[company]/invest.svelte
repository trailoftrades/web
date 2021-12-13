<script lang="ts">
	import company from '../../lib/company/current'
</script>

<p>Invest in {$company?.name ?? 'unknown company'}</p>

<style lang="scss">
	@use 'shared/colors';

	p {
		color: colors.$black;
	}
</style>
