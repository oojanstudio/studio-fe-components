<script lang="ts">
	import ButtonGroup from '$lib/components/ButtonGroup.svelte';
import '$lib/styles/index.css';
const { children } = $props();

const demoButtons = [
  { label: "Graph", code: "graph" },
  { label: "Stage", code: "stage" },
  { label: "Worker", code: "worker" },
];

</script>

<ButtonGroup buttons={demoButtons} />

{@render children()}
