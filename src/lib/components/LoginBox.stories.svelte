<script module>
import { defineMeta } from "@storybook/addon-svelte-csf";

import LoginBox from "./LoginBox.svelte";

const { Story } = defineMeta({
  title: "Components/LoginBox",
  component: LoginBox,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
  args: {
    email: "",
    rememberEmail: false,
    onSubmitEmail: () => {},
    onSubmitSSO: () => {},
  },
});
</script>

<Story name="Centered In Page">
  {#snippet template(args)}
    <div class="story-wrap centered">
      <LoginBox {...args} />
    </div>
  {/snippet}
</Story>

<Story
  name="Remembered Email"
  args={{
    email: "user@example.com",
    rememberEmail: true,
  }}
/>

<Story name="Right Half Layout">
  {#snippet template(args)}
    <div class="story-wrap split-layout">
      <div class="graphic-side" aria-hidden="true"></div>
      <div class="right-side">
        <LoginBox {...args} />
      </div>
    </div>
  {/snippet}
</Story>

<style>
.story-wrap {
  min-height: 92vh;
  width: 100%;
  background: linear-gradient(
    135deg,
    color-mix(in srgb, var(--surface-page) 90%, white),
    color-mix(in srgb, var(--surface-panel) 88%, white)
  );
}

.centered {
  display: grid;
  place-items: center;
}

.split-layout {
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: min(100%, 1200px);
  min-height: min(72vh, 680px);
  margin: clamp(var(--space-7), 3vw, 28px) auto;
  border-radius: var(--radius-xl);
  overflow: hidden;
  box-shadow: var(--shadow-md);
}

.graphic-side {
  background:
    radial-gradient(circle at 30% 30%, rgb(255 212 0 / 45%), transparent 38%),
    radial-gradient(circle at 60% 65%, rgb(16 211 137 / 36%), transparent 44%),
    radial-gradient(circle at 70% 35%, rgb(47 133 247 / 38%), transparent 42%),
    radial-gradient(circle at 40% 75%, rgb(247 0 78 / 34%), transparent 46%),
    linear-gradient(
      135deg,
      color-mix(in srgb, var(--surface-panel) 90%, white),
      color-mix(in srgb, var(--surface-elevated) 88%, white)
    );
}

.right-side {
  display: grid;
  place-items: center;
}

@media (max-width: 900px) {
  .split-layout {
    grid-template-columns: 1fr;
  }

  .graphic-side {
    display: none;
  }
}
</style>
