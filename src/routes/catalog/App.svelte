<script>
	import Spinner from "./Spinner.svelte";
	import { getData } from "./fetcher";
	const response = getData("");
</script>

<h1>Modern Fetch</h1>
{#await $response}
	<Spinner />
{:then data}
	<hr />
	<p>{JSON.stringify(data, null, 2)}</p>
{:catch}
	<p>Err</p>
{/await}
