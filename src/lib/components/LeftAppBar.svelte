<script lang="ts">
	type ItemId = "docs" | "profile" | "settings" | "templates";

	interface NavItem {
		id: ItemId;
		label: string;
	}

	interface Props {
		extended?: boolean;
		active?: ItemId;
		avatarName?: string;
		avatarSrc?: string;
		avatarAlt?: string;
	}

	const navItems: NavItem[] = [
		{ id: "docs", label: "Docs" },
		{ id: "profile", label: "Profile" },
		{ id: "settings", label: "Settings" },
		{ id: "templates", label: "Templates" }
	];

	let {
		extended = false,
		active = $bindable<ItemId>("docs"),
		avatarName = "A",
		avatarSrc = "",
		avatarAlt = "User avatar"
	}: Props = $props();

	function isActive(id: ItemId) {
		return active === id;
	}

	function iconFor(id: ItemId) {
		if (id === "docs") {
			return "M8 6h8M8 10h8M8 14h6M5 4h14a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1Z";
		}

		if (id === "profile") {
			return "M12 12a4 4 0 1 0 0-8a4 4 0 0 0 0 8Zm-7 8a7 7 0 0 1 14 0";
		}

		if (id === "settings") {
			return "M10.3 4.2L9.7 6a6.3 6.3 0 0 0-1.8.8l-1.8-.8l-1.6 2.8l1.4 1.3a6.2 6.2 0 0 0 0 1.9l-1.4 1.3l1.6 2.8l1.8-.8c.6.4 1.2.6 1.8.8l.6 1.8h3.2l.6-1.8c.6-.2 1.2-.4 1.8-.8l1.8.8l1.6-2.8l-1.4-1.3a6.2 6.2 0 0 0 0-1.9l1.4-1.3l-1.6-2.8l-1.8.8a6.3 6.3 0 0 0-1.8-.8l-.6-1.8Zm1.7 6.1a2.2 2.2 0 1 1 0 4.4a2.2 2.2 0 0 1 0-4.4Z";
		}

		return "M4 6h16M4 12h16M4 18h16M8 3v6M16 9v6M12 15v6";
	}
</script>

<nav class:extended class="left-appbar" aria-label="Editor tools">
	<button class="logo" type="button" aria-label="Brand home">
		<svg viewBox="0 0 24 24" aria-hidden="true">
			<path
				d="M4 17L10.5 8L13.4 12.2L16.5 9.2L20 17M3 17h18M10.5 8V5l4 3"
				fill="none"
				stroke="currentColor"
				stroke-width="1.8"
				stroke-linecap="round"
				stroke-linejoin="round"
			/>
		</svg>
		{#if extended}
			<span>Harbor</span>
		{/if}
	</button>

	<div class="actions">
		{#each navItems as item (item.id)}
			<button
				class:active={isActive(item.id)}
				class="action"
				type="button"
				aria-label={item.label}
				title={item.label}
				onclick={() => (active = item.id)}
			>
				<svg viewBox="0 0 24 24" aria-hidden="true">
					<path
						d={iconFor(item.id)}
						fill="none"
						stroke="currentColor"
						stroke-width="1.8"
						stroke-linecap="round"
						stroke-linejoin="round"
					/>
				</svg>
				{#if extended}
					<span>{item.label}</span>
				{/if}
			</button>
		{/each}
	</div>

	<button class="avatar" type="button" aria-label="User profile">
		{#if avatarSrc}
			<img src={avatarSrc} alt={avatarAlt} />
		{:else}
			<span>{avatarName.slice(0, 1).toUpperCase()}</span>
		{/if}
	</button>
</nav>

<style>
.left-appbar {
	--bar-width: 84px;
	width: var(--bar-width);
	height: 100%;
	min-height: 560px;
	border: 1px solid var(--border-subtle);
	border-radius: var(--radius-xl);
	background: linear-gradient(
			180deg,
			color-mix(in srgb, var(--surface-panel) 90%, white),
			var(--surface-page)
		);
	box-shadow: var(--shadow-sm);
	padding: var(--space-5) var(--space-3);
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: var(--space-4);
}

.left-appbar.extended {
	--bar-width: 220px;
	align-items: stretch;
	padding: var(--space-5);
}

.logo,
.action,
.avatar {
	border: 0;
	background: transparent;
	color: var(--text-primary);
}

.logo,
.action {
	width: 100%;
	border-radius: var(--radius-lg);
	display: inline-flex;
	align-items: center;
	justify-content: center;
	gap: var(--space-4);
	cursor: pointer;
}

.logo {
	min-height: 52px;
	border: 1px solid var(--border-default);
}

.logo svg,
.action svg {
	width: 26px;
	height: 26px;
}

.actions {
	width: 100%;
	display: flex;
	flex-direction: column;
	gap: var(--space-3);
}

.action {
	min-height: 52px;
	color: var(--text-secondary);
}

.action:hover,
.logo:hover {
	background: color-mix(in srgb, var(--surface-elevated) 56%, transparent);
	color: var(--text-primary);
}

.action.active {
	color: var(--text-primary);
	background: color-mix(in srgb, var(--surface-elevated) 90%, white);
	box-shadow: inset 0 0 0 1px var(--border-default);
}

.left-appbar.extended .logo,
.left-appbar.extended .action {
	justify-content: flex-start;
	padding-inline: var(--space-4);
}

.logo span,
.action span {
	font-size: var(--font-size-sm);
	font-weight: var(--font-weight-medium);
}

.avatar {
	margin-top: auto;
	width: 44px;
	height: 44px;
	border-radius: var(--radius-full);
	background: color-mix(in srgb, var(--color-accent) 28%, white);
	color: var(--text-primary);
	font-size: var(--font-size-sm);
	font-weight: var(--font-weight-bold);
	display: inline-flex;
	align-items: center;
	justify-content: center;
	cursor: pointer;
}

.avatar:hover {
	background: color-mix(in srgb, var(--color-accent) 38%, white);
}

.avatar img {
	width: 100%;
	height: 100%;
	border-radius: inherit;
	object-fit: cover;
	display: block;
}

@media (max-width: 640px) {
	.left-appbar {
		min-height: 500px;
	}
}
</style>
