<script lang="ts">
  interface Props {
    placeholder?: string;
    buttonLabel?: string;
    value?: string;
    onsubmit?: (email: string) => void;
  }

  let {
    placeholder = "Enter Your Email",
    buttonLabel = "SUBSCRIBE NOW",
    value = $bindable(""),
    onsubmit,
  }: Props = $props();

  function handleSubmit(event: SubmitEvent) {
    event.preventDefault();
    onsubmit?.(value.trim());
  }
</script>

<form class="newsletter-form" onsubmit={handleSubmit}>
  <input
    class="email-input"
    type="email"
    bind:value
    autocomplete="email"
    aria-label="Email"
    {placeholder}
  />
  <button class="submit-btn" type="submit">{buttonLabel}</button>
</form>

<style>
.newsletter-form {
  width: min(100%, 450px);
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: stretch;
}

.email-input {
  border: 0;
  min-height: 50px;
  padding: 0 var(--space-6);
  font-size: var(--font-size-md);
  border-radius: var(--radius-md) 0 0 var(--radius-md);
  color: var(--color-flip-text-hi-con);
  background: color-mix(in srgb, var(--color-flip-bg-4) 72%, #6b6f76);
}

.email-input::placeholder {
  color: color-mix(in srgb, var(--color-flip-text-md-con) 92%, white);
}

.email-input:focus-visible {
  outline: 2px solid var(--color-warning);
  outline-offset: 2px;
}

.submit-btn {
  border: 0;
  min-height: 50px;
  padding: 0 var(--space-8);
  font-size: var(--font-size-md);
  font-weight: var(--font-weight-bold);
  letter-spacing: var(--letter-spacing-loose);
  border-radius: 0 var(--radius-md) var(--radius-md) 0;
  color: var(--color-flip-text-hi-con);
  background: var(--color-accent);
  cursor: pointer;
  transition: filter 150ms ease;
}

.submit-btn:hover {
  filter: brightness(1.08);
}

.submit-btn:focus-visible {
  outline: 2px solid var(--color-warning);
  outline-offset: 2px;
}

@media (max-width: 640px) {
  .newsletter-form {
    grid-template-columns: 1fr;
    gap: var(--space-4);
  }

  .email-input,
  .submit-btn {
    border-radius: var(--radius-lg);
    width: 100%;
  }
}
</style>
