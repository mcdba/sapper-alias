<script>
  export let menus;
</script>

<h2>menus</h2>
<ul>
  {#each menus as menu}
    <li>
    <a href={`catalog/${menu.menuId}`}>{menu.name}</a>
    
  {/each}
</ul>
