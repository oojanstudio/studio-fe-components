<script module>
import { defineMeta } from "@storybook/addon-svelte-csf";

import NewsletterCtaPair from "./NewsletterCtaPair.svelte";

const { Story } = defineMeta({
  title: "Components/NewsletterCtaPair",
  component: NewsletterCtaPair,
  tags: ["autodocs"],
  args: {
    placeholder: "Enter Your Email",
    buttonLabel: "SUBSCRIBE NOW",
  },
});
</script>

<Story name="Default" />

<Story
  name="Custom Labels"
  args={{
    placeholder: "Work email",
    buttonLabel: "Join Us",
  }}
/>
