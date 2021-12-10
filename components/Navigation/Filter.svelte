<script lang="ts">
	import { page } from '$app/stores'

	import companyFilter, {
		COMPANY_FILTER_KEY,
		DEFAULT_COMPANY_FILTER,
		CompanyFilter
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

<a {href} aria-current={active && 'page'}>{id}</a>

<style lang="scss">
</style>
