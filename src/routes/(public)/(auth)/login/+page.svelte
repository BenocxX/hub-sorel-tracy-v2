<script lang="ts">
  import { resolve } from '$app/paths';
  import LoginForm from '$lib/client/components/structure/forms/auth/login-form.svelte';

  const { data } = $props();
</script>

<div class="w-full text-left lg:px-20 xl:px-24">
  <h1 class="text-5xl">Connexion</h1>
  <p class="mb-6 mt-4 text-foreground-discreet">
    Vous n'avez pas de compte? <a href={resolve('/register')} class="link">S'inscrire</a>
  </p>
  <LoginForm data={data.form} />
</div>
