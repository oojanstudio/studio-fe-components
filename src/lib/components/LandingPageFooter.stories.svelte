<script module>
import { defineMeta } from "@storybook/addon-svelte-csf";

import LandingPageFooter from "./LandingPageFooter.svelte";

const { Story } = defineMeta({
  title: "Components/LandingPageFooter",
  component: LandingPageFooter,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
  args: {
    productsTitle: "Products",
    quickLinksTitle: "Quick Link",
    newsletterTitle: "Subscribe Newsletter",
    emailPlaceholder: "Enter Your Email",
    subscribeLabel: "SUBSCRIBE NOW",
    socialLinks: {
      fbUrl: "https://facebook.com",
      twitterUrl: "https://twitter.com",
      instaUrl: "https://instagram.com",
      youtubeUrl: "https://youtube.com",
    },
  },
});
</script>

<Story name="Default" />

<Story
  name="With Missing Social Links"
  args={{
    socialLinks: {
      fbUrl: "https://facebook.com",
      instaUrl: "https://instagram.com",
    },
  }}
/>
