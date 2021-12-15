<script lang="ts">
	import company from '../../lib/company/current'
</script>

<p>{$company?.name ?? 'unknown company'}'s story</p>

<style lang="scss">
	@use 'shared/colors';

	p {
		color: colors.$black;
	}
</style>
