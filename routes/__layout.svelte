<script lang="ts">
	import Analytics from '../components/Analytics.svelte'
	import Progress from '../components/Progress.svelte'
	import Companies from '../components/Companies/Scene.svelte'

	import '../shared/reset.scss'
</script>

<Analytics />
<Progress />

<Companies />
<slot />
