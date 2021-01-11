<script context="module">
  export function preload() {
    return this.fetch(`catalog/menu.json`)
      .then(r => r.json())
      .then(menus => {
        return { menus };
      });
  }
</script>

<script>
  export let menus;
  import Catalog from "@/components/Catalog.svelte";
  import CatalogMenu from "@/components/CatalogMenu.svelte";
</script>

<style>
  .catalog {
    display: flex;
  }
</style>

<div class="catalog">
  <CatalogMenu {menus} />
  <Catalog />

</div>
