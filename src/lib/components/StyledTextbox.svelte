<script lang="ts">
  interface Props {
    label?: string;
    placeholder?: string;
    hint?: string;
    invalid?: boolean;
    disabled?: boolean;
    value?: string;
    oninput?: (value: string) => void;
  }

  let {
    label = "Search",
    placeholder = "Type something...",
    hint = "",
    invalid = false,
    disabled = false,
    value = $bindable(""),
    oninput,
  }: Props = $props();

  let focused = $state(false);

  function handleInput(event: Event) {
    value = (event.currentTarget as HTMLInputElement).value;
    oninput?.(value);
  }
</script>

<div class="textbox-wrap">
  <label class="textbox-label">{label}</label>
  <div class:textbox-shell={true} class:focused class:invalid>
    <input
      type="text"
      bind:value
      {placeholder}
      {disabled}
      oninput={handleInput}
      onfocus={() => (focused = true)}
      onblur={() => (focused = false)}
    />
  </div>
  {#if hint}
    <p class:hint={true} class:invalid>{hint}</p>
  {/if}
</div>

<style>
.textbox-wrap {
  display: grid;
  gap: var(--space-2);
  max-width: 420px;
}

.textbox-label {
  color: var(--color-text-hi-con);
  font-weight: var(--font-weight-medium);
}

.textbox-shell {
  border: 1px solid var(--border-default);
  border-radius: var(--radius-lg);
  background: linear-gradient(
    180deg,
    color-mix(in srgb, var(--color-bg-2) 88%, white),
    var(--color-bg-2)
  );
  transition: border-color 160ms ease, box-shadow 160ms ease;
}

.textbox-shell.focused {
  border-color: var(--color-accent);
  box-shadow: 0 0 0 3px color-mix(in srgb, var(--color-accent) 30%, transparent);
}

.textbox-shell.invalid {
  border-color: var(--color-danger);
}

input {
  width: 100%;
  padding: var(--space-3) var(--space-4);
  border: none;
  outline: none;
  color: var(--color-text-hi-con);
  background: transparent;
}

input:disabled {
  cursor: not-allowed;
  opacity: 0.65;
}

.hint {
  margin: 0;
  font-size: var(--font-size-sm);
  color: var(--color-text-med-con);
}

.hint.invalid {
  color: var(--color-danger);
}
</style>
