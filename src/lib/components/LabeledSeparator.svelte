<script lang="ts">
  interface Props {
    align?: "left" | "center";
  }

  let { align = "center" }: Props = $props();
</script>

<div class={`labeled-separator ${align}`} role="separator" aria-label="Or login with">
  <span>Or login with</span>
</div>

<style>
.labeled-separator {
  --separator-color: var(--text-secondary);
  --separator-padding-inline: var(--space-5);
  display: flex;
  align-items: center;
  gap: var(--space-4);
  color: var(--separator-color);
  font-size: var(--font-size-sm);
  font-weight: var(--font-weight-medium);
}

.labeled-separator::before,
.labeled-separator::after {
  content: "";
  height: 1px;
  background: currentColor;
  opacity: 0.55;
  flex: 1;
}

.labeled-separator span {
  padding-inline: var(--separator-padding-inline);
  white-space: nowrap;
}

.labeled-separator.left::before {
  max-width: 18px;
  flex: 0 0 18px;
}

.labeled-separator.left::after {
  flex: 1;
}

.labeled-separator.center::before,
.labeled-separator.center::after {
  flex: 1;
}
</style>
