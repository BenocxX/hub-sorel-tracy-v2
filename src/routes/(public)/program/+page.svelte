<script lang="ts">
  import { cn } from '$lib/client/utils';
  import * as Tabs from '$lib/client/components/ui/tabs';
  import * as Dialog from '$lib/client/components/ui/dialog';
  import { sessions } from '$lib/common/tools/sessions';
  import Button from '$lib/client/components/ui/button/button.svelte';
  import { Eye, EyeOff } from 'lucide-svelte';

  let hideBaseClasses = $state(false);
</script>

<div class="container mx-auto">
  <h1 class="text-5xl">Notre programme</h1>
  <p class="mt-4 text-lg">
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam eos nemo ducimus iste
    reprehenderit corrupti corporis modi dolorum repellat dolorem est quia, dolores inventore vero
    ipsum nesciunt iusto, quae explicabo repudiandae ullam? Architecto porro maiores optio sit!
    Dicta, suscipit aliquam. Vero, voluptate repudiandae. Labore quis quam nulla illum corporis
    nihil?
  </p>

  <div class="mb-4 mt-16 flex items-center gap-4">
    <h3 class="text-4xl">Grille de cours</h3>
  </div>
  <Tabs.Root value={sessions[0].id}>
    <div class="flex flex-col-reverse gap-4 md:flex-row md:items-center">
      <Tabs.List class="grid h-max w-full grid-cols-3 gap-1 md:w-max md:grid-cols-6">
        {#each sessions as session (session.id)}
          <Tabs.Trigger value={session.id} class="md:w-max">
            {session.name}
          </Tabs.Trigger>
        {/each}
      </Tabs.List>
      <Button size="default" variant="outline" onclick={() => (hideBaseClasses = !hideBaseClasses)}>
        {#if hideBaseClasses}
          <span>Afficher les cours de base</span>
          <EyeOff class="!size-5" />
        {:else}
          <span>Cacher les cours de base</span>
          <Eye class="!size-5" />
        {/if}
      </Button>
    </div>
    {#each sessions as session (session.id)}
      <Tabs.Content value={session.id}>
        <ul role="list" class="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4">
          {#each session.classes as classItem (classItem.code)}
            {#if !classItem.isBaseClass || !hideBaseClasses}
              <li class="group col-span-1 flex rounded-md shadow-sm">
                <Dialog.Root>
                  <Dialog.Trigger>
                    {#snippet child({ props })}
                      <button {...props} class="w-full text-left">
                        <div class="flex w-full">
                          <div
                            class={cn(
                              'flex w-14 shrink-0 items-center justify-center rounded-l-md bg-gray-400  text-sm font-medium text-white',
                              !classItem.isBaseClass && classItem.color
                            )}
                          >
                            <!-- eslint-disable-next-line svelte/no-at-html-tags -->
                            {@html classItem.icon}
                          </div>
                          <div
                            class="flex flex-1 items-center justify-between truncate rounded-r-md border-b border-r border-t border-gray-200 bg-white transition-colors group-hover:bg-gray-100"
                          >
                            <div class="flex-1 truncate px-4 py-2 text-sm">
                              <h5 class="truncate font-medium text-gray-900">
                                {classItem.name}
                              </h5>
                              <p class="text-gray-500">{classItem.code}</p>
                            </div>
                          </div>
                        </div>
                      </button>
                    {/snippet}
                  </Dialog.Trigger>
                  <Dialog.Content>
                    <Dialog.Header>
                      <Dialog.Title>{classItem.name}</Dialog.Title>
                      <Dialog.Description class="!mt-4">{classItem.description}</Dialog.Description>
                    </Dialog.Header>
                  </Dialog.Content>
                </Dialog.Root>
              </li>
            {/if}
          {/each}
        </ul>
      </Tabs.Content>
    {/each}
  </Tabs.Root>
</div>
