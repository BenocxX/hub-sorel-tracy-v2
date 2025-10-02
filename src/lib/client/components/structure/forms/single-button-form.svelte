<script
  lang="ts"
  generics="T extends Record<string, unknown>, V extends ClientValidationAdapter<T, T>"
>
  import * as Form from '$lib/client/components/ui/form/index.js';
  import { superForm, type FormPath, type SuperValidated } from 'sveltekit-superforms';
  import { type ClientValidationAdapter } from 'sveltekit-superforms/adapters';
  import { Input } from '$lib/client/components/ui/input';
  import { buttonVariants, type ButtonProps } from '$lib/client/components/ui/button';
  import type { Snippet } from 'svelte';
  import type { VariantProps } from 'tailwind-variants';

  type Data = SuperValidated<T>;

  type Props = {
    data: Data;
    buttonProps?: ButtonProps;
    buttonVariants?: VariantProps<typeof buttonVariants>;
    form: {
      id: string;
      action: string;
      method: 'POST' | 'GET';
      key: keyof T;
      value: T[keyof T];
    };
    validator: V;
    children: Snippet;
  };

  const props: Props = $props();

  const name: FormPath<T> = props.form.key as FormPath<T>;

  const form = superForm(props.data, {
    id: props.form.id,
    validators: props.validator,
  });

  const { form: formData, delayed, enhance } = form;

  $formData[props.form.key] = props.form.value;
</script>

<form method={props.form.method} action={props.form.action} class="w-full sm:w-max" use:enhance>
  <Form.Field {form} {name}>
    <Form.Control>
      {#snippet children({ props: controlProps })}
        <Input type="hidden" {...controlProps} bind:value={$formData[props.form.key]} />
      {/snippet}
    </Form.Control>
  </Form.Field>
  <Form.Button
    {...props.buttonProps}
    class={buttonVariants({ variant: 'destructive', ...props.buttonVariants })}
    {delayed}
  >
    {@render props.children()}
  </Form.Button>
</form>
