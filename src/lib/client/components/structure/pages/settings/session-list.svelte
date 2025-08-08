<script lang="ts">
  import { Button } from '$lib/client/components/ui/button';
  import Trash from 'lucide-svelte/icons/trash';
  import { Separator } from '$lib/client/components/ui/separator';
  import type { Infer, SuperValidated } from 'sveltekit-superforms';
  import type { PublicSessionDTO } from '$lib/common/types/dto';
  import { formatDateFrench, formatTimeBetween } from '$lib/common/tools/format';
  import { Badge } from '$lib/client/components/ui/badge';
  import AlertDialogConfirm from '$lib/client/components/ui-custom/dialogs/alert-dialog-confirm.svelte';
  import type { DeleteSessionSchema } from '$lib/common/schemas/settings-schemas';
  import DeleteSessionForm from '../../forms/settings/delete-session-form.svelte';

  type Props = {
    sessions: PublicSessionDTO[];
    currentSessionPublicId: string;
    deleteForm: SuperValidated<Infer<DeleteSessionSchema>>;
  };

  const { sessions, currentSessionPublicId, deleteForm }: Props = $props();
</script>

<div class="grid grid-cols-1 gap-x-8 gap-y-10 py-12 md:grid-cols-3">
  <div>
    <h2 class="font-semibold">Sessions</h2>
    <p class="mt-1 text-sm/6 text-foreground-discreet">
      Gérez vos sessions actives et déconnectez-vous de celles que vous ne reconnaissez pas.
    </p>
  </div>
  <div class="flex flex-col gap-4 md:col-span-2">
    {#if sessions.length > 0}
      <ul class="space-y-4">
        {#each sessions as session, index (session.publicId)}
          {@render sessionListItem({ session })}
          {#if index < sessions.length - 1}
            <Separator />
          {/if}
        {/each}
      </ul>
    {:else}
      <p class="text-center text-foreground-discreet">Aucune session n'a été trouvée.</p>
    {/if}
  </div>
</div>

{#snippet sessionListItem({ session }: { session: PublicSessionDTO })}
  <li class="flex items-center justify-between">
    <div class="overflow-x-hidden pr-8">
      <p class="truncate">{session.name}</p>
      <div class="mt-1 flex flex-wrap gap-1.5">
        {#if session.publicId === currentSessionPublicId}
          <Badge variant="success">Session actuelle</Badge>
        {/if}
        <Badge variant="outline">Créée le {formatDateFrench(session.createdAt)}</Badge>
        <Badge variant="outline">Expire dans {formatTimeBetween(session.expiresAt)}</Badge>
        <Badge variant="outline">
          Dernière utilisation il y a {formatTimeBetween(session.lastUsed)}
        </Badge>
      </div>
    </div>
    <div class="flex items-center gap-2">
      <AlertDialogConfirm>
        {#snippet trigger({ props })}
          <Button {...props} size="icon" variant="destructive">
            <Trash />
          </Button>
        {/snippet}
        {#snippet title()}
          Êtes-vous sûr de vouloir supprimer cette session ?
        {/snippet}
        {#snippet description()}
          La session sera définitivement supprimée et vous serez déconnecté de cet appareil.
        {/snippet}
        {#snippet action({ props })}
          <DeleteSessionForm {session} data={deleteForm} buttonProps={props} />
        {/snippet}
      </AlertDialogConfirm>
    </div>
  </li>
{/snippet}
