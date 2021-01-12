<script>
  export let id;
</script>

<h1>{id}</h1>
<a href={`/${parseInt(id) + 1}`}>+</a>
<hr />
<a href={`/${parseInt(id) - 1}`}>-</a>
