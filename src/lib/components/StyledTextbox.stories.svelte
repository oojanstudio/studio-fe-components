<script module>
import { defineMeta } from "@storybook/addon-svelte-csf";

import StyledTextbox from "./StyledTextbox.svelte";

const { Story } = defineMeta({
  title: "Components/StyledTextbox",
  component: StyledTextbox,
  tags: ["autodocs"],
  args: {
    label: "Project name",
    placeholder: "ex: Atlas dashboard",
    hint: "Use a clear, searchable name",
    value: "",
    oninput: () => {},
  },
});
</script>

<Story name="Default" />

<Story
  name="Invalid"
  args={{
    value: "",
    invalid: true,
    hint: "Project name is required",
  }}
/>
