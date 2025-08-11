<script lang="ts">
  import { formatToId } from '$lib/common/tools/format';
  import { buttonVariants } from '../../ui/button';
  import BasicSlide, { type BasicSlideProps } from './basic-slide.svelte';
  import List from './list.svelte';

  type Props = Omit<BasicSlideProps, 'children'> & {
    slideLinks: string[];
  };

  const { slideLinks, class: className, ...props }: Props = $props();
</script>

<BasicSlide id="table-of-content" title="Table des matières" {...props}>
  <List class={className}>
    {#each slideLinks as slideLink (slideLink)}
      <li>
        <a
          href={`#/${formatToId(slideLink)}`}
          class={buttonVariants({
            variant: 'ghost',
            className: 'text-wrap !text-lg font-normal sm:!text-2xl',
          })}
        >
          {slideLink}
        </a>
      </li>
    {/each}
  </List>
</BasicSlide>
