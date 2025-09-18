<script lang="ts">
  import { Slider } from '$lib/client/components/ui/slider';
  import { cn } from '$lib/client/utils';
  import { Switch } from '../../ui/switch';
  import ReactiveCodeBlock from './reactive-code-block.svelte';

  const defaultValue = 10;

  let paddingSize = $state(defaultValue);
  let borderSize = $state(defaultValue);
  let marginSize = $state(defaultValue);

  let isInspecterMode = $state(true);
</script>

{#snippet slider(label: string, value: number, onValueChange: (value: number) => void)}
  <div class="space-y-2">
    <span class="!text-xl">{label}: {value.toFixed(0)}px</span>
    <Slider type="single" value={defaultValue} {onValueChange} max={20} />
  </div>
{/snippet}

{#snippet boxModel()}
  <li
    class={cn(isInspecterMode && 'bg-[#F9CC9E] dark:bg-[#AB7E4E]')}
    style="padding: {marginSize}px;"
  >
    <div
      class={cn(
        'border-solid border-transparent text-white',
        isInspecterMode && 'border-[#FFEEBC] bg-[#C5DFB9] dark:border-[#B1A06D] dark:bg-[#5E774F]'
      )}
      style="padding: {paddingSize}px; border-width: {borderSize}px;"
    >
      <div
        class={cn(
          '!text-xl text-foreground',
          isInspecterMode && 'bg-[#ACC8E6] dark:bg-[#527899] dark:text-white'
        )}
      >
        Item 3
      </div>
    </div>
  </li>
{/snippet}

<div class="flex flex-col items-start gap-16 md:flex-row">
  <div class="w-full space-y-6 md:w-1/2">
    {@render slider('Padding', paddingSize, (value) => (paddingSize = value))}
    {@render slider('Border', borderSize, (value) => (borderSize = value))}
    {@render slider('Margin', marginSize, (value) => (marginSize = value))}
    <div class="flex items-center gap-4">
      <label for="inspecter-mode" class="!text-xl">Inspecter le modèle de boîte</label>
      <Switch id="inspecter-mode" bind:checked={isInspecterMode} />
    </div>
  </div>
  <ul
    class="!h-[324px] w-full list-disc space-y-0 rounded-xl bg-secondary p-8 pl-12 *:w-max *:!text-xl md:h-full md:w-1/2"
  >
    <li>Item 1</li>
    <li>Item 2</li>
    {@render boxModel()}
    <li>Item 4</li>
    <li>Item 4</li>
  </ul>
</div>

<div class="flex gap-16">
  <div class="hidden flex-1 md:flex"></div>
  <ReactiveCodeBlock
    class="flex-1"
    language="CSS"
    code={`div {
  padding: ${paddingSize}px;
  border-width: ${borderSize}px;
  margin: ${marginSize}px;
}`}
  />
</div>
