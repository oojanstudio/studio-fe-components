<script lang="ts">
  import BrandLogo from "./BrandLogo.svelte";

  type Size = "xl" | "lg" | "md" | "sm" | "xs";
  type Variant = "duotone" | "grey" | "outline";

  interface Props {
    lightColor?: string;
    darkColor?: string;
  }

  let { lightColor = "#7bbce8", darkColor = "#1a3f6f" }: Props = $props();

  const sizes: Size[] = ["xl", "lg", "md", "sm", "xs"];
  const variants: Variant[] = ["duotone", "grey", "outline"];
</script>

<div class="combo-grid" role="table" aria-label="BrandLogo size and variant combinations">
  <div class="head empty" role="columnheader"></div>
  {#each variants as variant}
    <div class="head" role="columnheader">{variant}</div>
  {/each}

  {#each sizes as size}
    <div class="row-label" role="rowheader">{size}</div>
    {#each variants as variant}
      <div class="cell" role="cell">
        <BrandLogo {size} {variant} {lightColor} {darkColor} />
      </div>
    {/each}
  {/each}
</div>

<style>
.combo-grid {
  display: grid;
  grid-template-columns: 72px repeat(3, minmax(140px, 1fr));
  gap: 10px;
  padding: 16px;
  background: #f4f8fb;
  border: 1px solid #d7e2eb;
  border-radius: 12px;
}

.head,
.row-label {
  font-size: 12px;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: #41566a;
  align-self: center;
}

.head {
  font-weight: 700;
}

.row-label {
  font-weight: 600;
}

.cell {
  min-height: 96px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #ffffff;
  border: 1px solid #dde7ef;
  border-radius: 10px;
  padding: 8px;
}

.empty {
  visibility: hidden;
}
</style>
