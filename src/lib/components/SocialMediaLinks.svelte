<script lang="ts">
  interface SocialLinks {
    fbUrl?: string;
    twitterUrl?: string;
    instaUrl?: string;
    youtubeUrl?: string;
  }

  interface Props {
    links?: SocialLinks;
    size?: number;
    circleBgColor?: string;
    iconColor?: string;
    disabledBgColor?: string;
    disabledIconColor?: string;
    openInNewTab?: boolean;
  }

  let {
    links = {},
    size = 40,
    circleBgColor = "#6126f8",
    iconColor = "#ffffff",
    disabledBgColor = "#495260",
    disabledIconColor = "#9ba4b2",
    openInNewTab = true,
  }: Props = $props();

  const platforms = [
    {
      key: "fbUrl",
      label: "Facebook",
      path: "M14.5 8h-1.8c-1 0-1.2.48-1.2 1.2V11h2.88l-.38 2.9h-2.5V21h-3V13.9H6V11h2.52V8.96C8.52 6.46 10 5 12.2 5c1.04 0 1.94.08 2.2.12Z",
    },
    {
      key: "twitterUrl",
      label: "Twitter",
      path: "M19.12 8.08c.01.16.01.32.01.49c0 5.03-3.83 10.83-10.83 10.83c-2.16 0-4.17-.63-5.86-1.72c.3.04.6.05.92.05c1.79 0 3.44-.61 4.75-1.63a3.82 3.82 0 0 1-3.57-2.64c.24.04.49.07.75.07c.36 0 .72-.05 1.05-.14a3.81 3.81 0 0 1-3.06-3.74v-.05c.52.29 1.11.47 1.74.49a3.81 3.81 0 0 1-1.7-3.17c0-.7.19-1.35.52-1.91a10.8 10.8 0 0 0 7.85 3.98a4.32 4.32 0 0 1-.1-.87a3.81 3.81 0 0 1 6.59-2.6a7.5 7.5 0 0 0 2.42-.92a3.8 3.8 0 0 1-1.67 2.1a7.62 7.62 0 0 0 2.2-.6a8.22 8.22 0 0 1-1.9 1.98Z",
    },
    {
      key: "instaUrl",
      label: "Instagram",
      path: "M12 8.9A3.1 3.1 0 1 0 12 15.1A3.1 3.1 0 0 0 12 8.9Zm5-2.2a2.2 2.2 0 0 0-2.2-2.2h-5.6A2.2 2.2 0 0 0 7 6.7v5.6a2.2 2.2 0 0 0 2.2 2.2h5.6a2.2 2.2 0 0 0 2.2-2.2V6.7Zm-5 6.95A4.15 4.15 0 1 1 12 5.35a4.15 4.15 0 0 1 0 8.3Zm4.55-7.73a.97.97 0 1 1-1.94 0a.97.97 0 0 1 1.94 0Z",
    },
    {
      key: "youtubeUrl",
      label: "YouTube",
      path: "M20.5 9.2c-.2-1.03-1-1.84-2.04-2.04C16.93 6.8 12 6.8 12 6.8s-4.93 0-6.46.36c-1.04.2-1.84 1-2.04 2.04C3.13 10.74 3.13 12 3.13 12s0 1.26.37 2.8c.2 1.04 1 1.84 2.04 2.04c1.53.36 6.46.36 6.46.36s4.93 0 6.46-.36c1.04-.2 1.84-1 2.04-2.04c.37-1.54.37-2.8.37-2.8s0-1.26-.37-2.8ZM10.4 14.56v-5.12L14.93 12Z",
    },
  ] as const;

  function getLink(platformKey: keyof SocialLinks): string | undefined {
    const value = links[platformKey];
    return value && value.trim() ? value : undefined;
  }
</script>

<div class="social-links" aria-label="Social media links" style={`--icon-size: ${size}px;`}>
  {#each platforms as platform (platform.key)}
    {@const href = getLink(platform.key)}
    {#if href}
      <a
        class="icon"
        href={href}
        aria-label={platform.label}
        style={`--circle-bg: ${circleBgColor}; --glyph-color: ${iconColor};`}
        target={openInNewTab ? "_blank" : undefined}
        rel={openInNewTab ? "noreferrer noopener" : undefined}
      >
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d={platform.path} />
        </svg>
      </a>
    {:else}
      <span
        class="icon disabled"
        aria-label={`${platform.label} link missing`}
        aria-disabled="true"
        style={`--circle-bg: ${disabledBgColor}; --glyph-color: ${disabledIconColor};`}
      >
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d={platform.path} />
        </svg>
      </span>
    {/if}
  {/each}
</div>

<style>
.social-links {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 16px;
}

.icon {
  --icon-size: 40px;
  width: var(--icon-size);
  height: var(--icon-size);
  border-radius: 999px;
  background: var(--circle-bg);
  color: var(--glyph-color);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  transition: transform 150ms ease, filter 150ms ease;
}

.icon:hover {
  transform: translateY(-1px);
  filter: brightness(1.06);
}

.icon.disabled {
  cursor: not-allowed;
}

.icon.disabled:hover {
  transform: none;
  filter: none;
}

.icon svg {
  width: 20px;
  height: 20px;
  fill: currentColor;
}
</style>
