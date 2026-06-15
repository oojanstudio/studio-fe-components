<script module>
import { defineMeta } from "@storybook/addon-svelte-csf";

import LabeledSeparator from "./LabeledSeparator.svelte";

const { Story } = defineMeta({
  title: "Components/LabeledSeparator",
  component: LabeledSeparator,
  tags: ["autodocs"],
  args: {
    align: "center",
  },
});
</script>

<Story name="Centered" />

<Story name="Left Aligned" args={{ align: "left" }} />

<Story name="Custom Color And Padding">
  {#snippet template(args)}
    <div class="tone-wrap">
      <LabeledSeparator {...args} />
    </div>
  {/snippet}
</Story>

<style>
.tone-wrap {
  --separator-color: var(--color-warning);
  --separator-padding-inline: var(--space-8);
  padding: var(--space-8);
  background: color-mix(in srgb, var(--surface-panel) 94%, white);
  border-radius: var(--radius-lg);
}
</style>
