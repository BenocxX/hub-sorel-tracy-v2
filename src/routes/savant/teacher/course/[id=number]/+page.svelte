<script lang="ts">
  import PageTitle from '$lib/client/components/structure/page-title.svelte';

  const { data } = $props();
</script>

<PageTitle title={data.course.name} />
