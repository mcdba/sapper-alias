<script>
  import { url } from "@roxi/routify";
  import { getData } from "../../getFetch";
  export let pokemon;
  const URL = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;
  const response = getData(URL);
</script>

<a href={$url('../../')}>back</a>
<h1>{pokemon}</h1>
{#await $response}
  Loading {pokemon}...
{:then data}
  <img src={data.sprites.front_default} alt={pokemon} />
{:catch}
  API Error
{/await}
