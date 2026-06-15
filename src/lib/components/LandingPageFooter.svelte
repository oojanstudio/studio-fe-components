<script lang="ts">
  import BrandLogo from "./BrandLogo.svelte";
  import NewsletterCtaPair from "./NewsletterCtaPair.svelte";
  import SocialMediaLinks from "./SocialMediaLinks.svelte";

  interface NavLink {
    label: string;
    href?: string;
  }

  interface SocialLinks {
    fbUrl?: string;
    twitterUrl?: string;
    instaUrl?: string;
    youtubeUrl?: string;
  }

  interface Props {
    logoAlt?: string;
    productsTitle?: string;
    quickLinksTitle?: string;
    newsletterTitle?: string;
    newsletterDescription?: string;
    productLinks?: NavLink[];
    quickLinks?: NavLink[];
    socialLinks?: SocialLinks;
    emailPlaceholder?: string;
    subscribeLabel?: string;
    copyrightText?: string;
  }

  let {
    logoAlt = "Brand logo",
    productsTitle = "Products",
    quickLinksTitle = "Quick Link",
    newsletterTitle = "Subscribe Newsletter",
    newsletterDescription = "Subscribe to our newsletter and unlock a world of exclusive benefits. Be the first to know about our latest products, special promotions, and exciting updates.",
    productLinks = [
      { label: "Home", href: "#" },
      { label: "About Us", href: "#" },
      { label: "Services", href: "#" },
      { label: "Product", href: "#" },
    ],
    quickLinks = [
      { label: "Home", href: "#" },
      { label: "About Us", href: "#" },
      { label: "Services", href: "#" },
      { label: "Product", href: "#" },
    ],
    socialLinks = {
      fbUrl: "#",
      twitterUrl: "#",
      instaUrl: "#",
      youtubeUrl: "#",
    },
    emailPlaceholder = "Enter Your Email",
    subscribeLabel = "SUBSCRIBE NOW",
    copyrightText = "© 2023 All rights reserved",
  }: Props = $props();

  function noopSubmit(_email: string) {}
</script>

<footer class="landing-footer" aria-label="Landing page footer">
  <div class="top-sections">
    <section class="brand-col" aria-label="Brand and social links">
      <div class="brand-logo" aria-label={logoAlt} role="img">
        <BrandLogo size="xl" variant="duotone" />
      </div>
      <SocialMediaLinks
        links={socialLinks}
        size={38}
        circleBgColor="var(--color-accent)"
        iconColor="var(--color-flip-text-hi-con)"
      />
    </section>

    <nav class="link-col" aria-label={productsTitle}>
      <h3>{productsTitle}</h3>
      <ul>
        {#each productLinks as item (item.label)}
          <li>
            <span class="chevron" aria-hidden="true">›</span>
            <a href={item.href || "#"}>{item.label}</a>
          </li>
        {/each}
      </ul>
    </nav>

    <nav class="link-col" aria-label={quickLinksTitle}>
      <h3>{quickLinksTitle}</h3>
      <ul>
        {#each quickLinks as item (item.label)}
          <li>
            <span class="chevron" aria-hidden="true">›</span>
            <a href={item.href || "#"}>{item.label}</a>
          </li>
        {/each}
      </ul>
    </nav>

    <section class="newsletter-col" aria-label={newsletterTitle}>
      <h3>{newsletterTitle}</h3>
      <p>{newsletterDescription}</p>
      <NewsletterCtaPair
        placeholder={emailPlaceholder}
        buttonLabel={subscribeLabel}
        onsubmit={noopSubmit}
      />
    </section>
  </div>

  <div class="divider" aria-hidden="true"></div>
  <p class="copyright">{copyrightText}</p>
</footer>

<style>
.landing-footer {
  --footer-bg-start: color-mix(in srgb, var(--color-flip-bg-1) 92%, #132433);
  --footer-bg-end: color-mix(in srgb, var(--color-flip-bg-2) 92%, #1a3042);
  --footer-text: var(--color-flip-text-hi-con);
  --footer-muted: color-mix(in srgb, var(--color-flip-text-hi-con) 72%, transparent);
  --footer-subtle-line: color-mix(in srgb, var(--color-flip-border-default) 74%, transparent);

  background: linear-gradient(90deg, var(--footer-bg-start) 0%, var(--footer-bg-end) 100%);
  color: var(--footer-text);
  padding: clamp(var(--space-8), 4vw, 40px) clamp(var(--space-7), 4vw, 30px);
  border-radius: 0;
}

.top-sections {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  gap: clamp(var(--space-7), 2.8vw, 42px);
  align-items: start;
}

.brand-col {
  flex: 1.2 1 280px;
  display: grid;
  align-content: start;
  gap: clamp(var(--space-7), 3vw, 42px);
}

.link-col {
  flex: 0.8 1 180px;
}

.newsletter-col {
  flex: 1.3 1 320px;
}

.brand-logo {
  width: min(220px, 72%);
  display: inline-flex;
}

.link-col h3,
.newsletter-col h3 {
  margin: 0 0 var(--space-6);
  font-size: clamp(1.3rem, 1.8vw, 2rem);
  font-weight: var(--font-weight-bold);
  color: var(--footer-text);
}

.link-col ul {
  margin: 0;
  padding: 0;
  list-style: none;
  display: grid;
  gap: var(--space-4);
}

.link-col li {
  display: flex;
  align-items: center;
  gap: var(--space-4);
}

.chevron {
  color: var(--color-warning);
  font-size: 1.9rem;
  line-height: 1;
  transform: translateY(-1px);
}

.link-col a {
  color: var(--footer-text);
  text-decoration: none;
  font-size: clamp(1rem, 1.2vw, 1.8rem);
}

.link-col a:hover {
  color: var(--footer-text);
  text-decoration: underline;
  text-underline-offset: 3px;
}

.newsletter-col p {
  margin: 0 0 var(--space-7);
  max-width: 560px;
  font-size: clamp(1rem, 1.05vw, 1.45rem);
  line-height: 1.55;
  color: var(--footer-muted);
}

.divider {
  height: 1px;
  margin-top: clamp(24px, 3vw, 30px);
  background: var(--footer-subtle-line);
}

.copyright {
  margin: clamp(16px, 2.4vw, 22px) 0 0;
  text-align: center;
  color: var(--footer-text);
  font-size: clamp(1rem, 1vw, 1.2rem);
}

@media (max-width: 1100px) {
  .top-sections {
    flex-wrap: wrap;
  }

  .newsletter-col {
    flex-basis: 100%;
    max-width: 100%;
  }
}

@media (max-width: 700px) {
  .top-sections {
    flex-direction: column;
    flex-wrap: nowrap;
  }

  .brand-col,
  .link-col,
  .newsletter-col {
    flex-basis: auto;
    width: 100%;
  }

  .brand-col {
    gap: var(--space-7);
  }

  .brand-logo {
    width: 180px;
  }
}
</style>
