<script lang="ts">
  type Size = "xl" | "lg" | "md" | "sm" | "xs";
  type Variant = "outline" | "duotone" | "grey";

  interface Props {
    size?: Size;
    variant?: Variant;
    /** Lighter fill color — used in duotone for the mark shapes */
    lightColor?: string;
    /** Darker fill color — used in duotone for the background frame */
    darkColor?: string;
    class?: string;
  }

  let {
    size = "md",
    variant = "duotone",
    lightColor = "#7bbce8",
    darkColor = "#1a3f6f",
    class: className = "",
  }: Props = $props();

  const sizeMap: Record<Size, { px: number; strokeWidth: number }> = {
    xl: { px: 128, strokeWidth: 6 },
    lg: { px: 80, strokeWidth: 8 },
    md: { px: 48, strokeWidth: 10 },
    sm: { px: 32, strokeWidth: 13 },
    xs: { px: 20, strokeWidth: 16 },
  };

  const current = $derived(sizeMap[size]);

  const bgFill = $derived(
    variant === "outline" ? "none" : variant === "grey" ? "#3d3d3d" : darkColor,
  );

  const bgStroke = $derived(variant === "outline" ? "currentColor" : "none");

  const markFill = $derived(
    variant === "outline"
      ? "none"
      : variant === "grey"
        ? "#d2d2d2"
        : lightColor,
  );

  const markStroke = $derived(variant === "outline" ? "currentColor" : "none");
</script>

<!--
  viewBox: 0 0 256 256
  Frame:        rounded rect 12,12 → 244,244 (rx 28)
  Left sail:    apex (128,58)  → base left (68,165)  → mast base (128,165)
  Right sail:   apex (128,102) → mast base (128,165) → right tip (178,144)
  Hull:         trapezia from y=165 down to y=194
  Wave 1:       quadratic crests, filled slab y≈200–218
  Wave 2:       deeper quadratic crests, filled slab y≈216–240
-->
<svg
  width={current.px}
  height={current.px}
  viewBox="0 0 256 256"
  xmlns="http://www.w3.org/2000/svg"
  aria-label="Studio101 brand mark"
  role="img"
  class={className}
>
  <!-- Background frame -->
  <rect
    x="12"
    y="12"
    width="232"
    height="232"
    rx="28"
    fill={bgFill}
    stroke={bgStroke}
    stroke-width={current.strokeWidth}
  />

  <!-- Left (main) sail -->
  <path
    d="M 128 58 L 128 165 L 68 165 Z"
    fill={markFill}
    stroke={markStroke}
    stroke-width={current.strokeWidth}
    stroke-linejoin="round"
  />

  <!-- Right (secondary) sail -->
  <path
    d="M 128 102 L 128 165 L 178 144 Z"
    fill={markFill}
    stroke={markStroke}
    stroke-width={current.strokeWidth}
    stroke-linejoin="round"
  />

  <!-- Hull -->
  <path
    d="M 74 165 L 62 194 L 194 194 L 182 165 Z"
    fill={markFill}
    stroke={markStroke}
    stroke-width={current.strokeWidth}
    stroke-linejoin="round"
  />

  <!-- Wave 1 -->
  <path
    d="M 42 200 Q 70 188 98 200 Q 126 212 154 200 Q 182 188 214 200 L 214 218 L 42 218 Z"
    fill={markFill}
    stroke={markStroke}
    stroke-width={current.strokeWidth}
    stroke-linejoin="round"
  />

  <!-- Wave 2 -->
  <path
    d="M 34 216 Q 66 202 98 216 Q 130 230 162 216 Q 194 202 220 216 L 220 240 L 34 240 Z"
    fill={markFill}
    stroke={markStroke}
    stroke-width={current.strokeWidth}
    stroke-linejoin="round"
  />
</svg>

<style>
  svg {
    display: block;
    flex-shrink: 0;
  }
</style>
