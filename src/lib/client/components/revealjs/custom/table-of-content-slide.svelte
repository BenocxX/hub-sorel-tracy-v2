<script lang="ts">
  import { buttonVariants } from '../../ui/button';
  import BasicSlide, { type BasicSlideProps } from './basic-slide.svelte';
  import List from './list.svelte';
  import { getSlideLinks } from './utils.svelte';

  type Props = Omit<BasicSlideProps, 'children'>;

  const { class: className, ...props }: Props = $props();

  const slideLinks = getSlideLinks();
</script>

<BasicSlide disableAutoAnimate id="table-of-content" title="Table des matières" {...props}>
  <List class={className}>
    {#each slideLinks as slideLink (slideLink)}
      <li>
        <a
          href={`#/${slideLink.page}`}
          class={buttonVariants({
            variant: 'ghost',
            className: 'text-wrap !text-lg font-normal sm:!text-2xl',
          })}
        >
          {slideLink.title}
        </a>
      </li>
    {/each}
  </List>
</BasicSlide>
