<script lang="ts">
  import RegisterForm from '$lib/client/components/forms/auth/register-form.svelte';

  const { data } = $props();
</script>

<div class="w-full text-left lg:px-20 xl:px-24">
  <h1 class="text-5xl">Créer un compte</h1>
  <p class="mb-6 mt-4 text-foreground-discreet">
    Vous avez déjà un compte? <a href="/login" class="link">Se connecter</a>
  </p>
  <RegisterForm data={data.form} />
</div>
