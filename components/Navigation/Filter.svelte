<script lang="ts">
	import { page } from '$app/stores'

	import type { CompanyFilter } from '../../lib/company/filter'
	import companyFilter, {
		COMPANY_FILTER_KEY,
		DEFAULT_COMPANY_FILTER
	} from '../../lib/company/filter'

	export let id: CompanyFilter

	$: active = id === $companyFilter

	$: href = (() => {
		const query = new URLSearchParams($page.query)

		id === DEFAULT_COMPANY_FILTER
			? query.delete(COMPANY_FILTER_KEY)
			: query.set(COMPANY_FILTER_KEY, id)

		const { path } = $page
		const queryString = query.toString()

		return `${path}${queryString && '?'}${queryString}`
	})()
</script>

<a {href} aria-current={active && 'page'}>
	<slot />
</a>

<style lang="scss">
	@use 'sass:math';
	@use 'shared/colors';

	a {
		$underline: 0.2rem;

		position: relative;
		padding: 0 0.3rem (0.3rem + $underline);
		text-decoration: none;
		font-size: 1.2rem;
		font-weight: 700;
		color: white;
		text-shadow: 0.5rem 0.5rem 2rem transparentize(colors.$black, 0.6);
		transition: color 0.3s, opacity 0.3s;

		&:hover {
			opacity: 0.7;
		}

		&::after {
			content: '';
			position: absolute;
			top: 100%;
			left: 0;
			right: 0;
			height: $underline;
			margin-top: -$underline;
			background: currentColor;
			border-radius: math.div($underline, 2);
		}

		& + :global(a) {
			margin-left: 2rem;
		}
	}

	[aria-current='page'] {
		color: colors.$selected;
	}
</style>
