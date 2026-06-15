<script module>
import { defineMeta } from "@storybook/addon-svelte-csf";

import LeftAppBar from "./LeftAppBar.svelte";

const { Story } = defineMeta({
  title: "Components/LeftAppBar",
  component: LeftAppBar,
  tags: ["autodocs"],
  args: {
    avatarSrc: "/pics/avatar-ashwin.jpeg",
    avatarAlt: "Ashwin avatar",
    avatarName: "Ashwin",
    active: "docs",
  },
  argTypes: {
    active: {
      control: "inline-radio",
      options: ["docs", "profile", "settings", "templates"],
    },
  },
});
</script>

<Story name="Compact" />

<Story name="Extended" args={{ extended: true, active: "templates" }} />

<Story name="ProfileActive" args={{ active: "profile" }} />
