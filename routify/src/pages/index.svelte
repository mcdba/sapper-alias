<script>
  import RoutifyIntro from "./example/_components/RoutifyIntro.svelte";
  import { url } from "@roxi/routify";
  import { metatags } from "@roxi/routify";
  metatags.title = "My Routify app";
  metatags.description = "Description coming soon...";
</script>

<RoutifyIntro />
<a href={$url('./ditto/picture')}>ditto</a>
