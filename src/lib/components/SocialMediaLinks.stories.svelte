<script module>
import { defineMeta } from "@storybook/addon-svelte-csf";

import SocialMediaLinks from "./SocialMediaLinks.svelte";

const { Story } = defineMeta({
  title: "Components/SocialMediaLinks",
  component: SocialMediaLinks,
  tags: ["autodocs"],
  args: {
    size: 40,
    circleBgColor: "#6126f8",
    links: {
      fbUrl: "https://facebook.com",
      twitterUrl: "https://twitter.com",
      instaUrl: "https://instagram.com",
      youtubeUrl: "https://youtube.com",
    },
  },
});
</script>

<Story name="All Links Available" />

<Story
  name="Missing Links Are Disabled"
  args={{
    links: {
      fbUrl: "https://facebook.com",
      instaUrl: "https://instagram.com",
    },
  }}
/>
