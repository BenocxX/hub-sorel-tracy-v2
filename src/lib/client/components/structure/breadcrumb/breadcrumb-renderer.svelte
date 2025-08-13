<script lang="ts">
  import { page } from '$app/state';
  import * as Breadcrumb from '../../ui/breadcrumb';

  const breadcrumbs = page.data.breadcrumbs;
</script>

{#if breadcrumbs}
  <Breadcrumb.Root>
    <Breadcrumb.List>
      {#each breadcrumbs as breadcrumb, index (breadcrumb.label)}
        <Breadcrumb.Item class="text-foreground-discreet">
          {#if breadcrumb.href}
            <Breadcrumb.Link
              class="underline-offset-4 hover:text-foreground hover:underline"
              href={breadcrumb.href}
            >
              {breadcrumb.label}
            </Breadcrumb.Link>
          {:else}
            <Breadcrumb.Page class="text-foreground-discreet">{breadcrumb.label}</Breadcrumb.Page>
          {/if}
        </Breadcrumb.Item>
        {#if index < breadcrumbs.length - 1}
          <Breadcrumb.Separator class="text-foreground-discreet" />
        {/if}
      {/each}
    </Breadcrumb.List>
  </Breadcrumb.Root>
{/if}
