<script lang="ts">
	import BrandLogo from "./BrandLogo.svelte";
	import LabeledSeparator from "./LabeledSeparator.svelte";

	interface Props {
		email?: string;
		rememberEmail?: boolean;
		onSubmitEmail?: (email: string, remember: boolean) => void;
		onSubmitSSO?: (provider: "google") => void;
	}

	let {
		email = $bindable(""),
		rememberEmail = $bindable(false),
		onSubmitEmail,
		onSubmitSSO,
	}: Props = $props();

	function handleSubmit(event: SubmitEvent) {
		event.preventDefault();

		const normalizedEmail = email.trim();
		if (!normalizedEmail) return;

		onSubmitEmail?.(normalizedEmail, rememberEmail);
	}

	function handleRememberChange(event: Event) {
		rememberEmail = (event.currentTarget as HTMLInputElement).checked;
	}

	function handleGoogleSignin(event: MouseEvent) {
		event.preventDefault();
		onSubmitSSO?.("google");
	}
</script>

<section class="login-shell" aria-label="Login panel">
	<form class="login-panel" onsubmit={handleSubmit}>
		<div class="logo-row" aria-label="Brand">
			<BrandLogo size="lg" variant="duotone" />
		</div>

		<div class="copy-wrap">
			<h2>Login</h2>
			<p>Enter your email to receive a verification code.</p>
		</div>

		<label class="field-label" for="email">Email</label>
		<input
			id="email"
			class="email-input"
			type="email"
			bind:value={email}
			autocomplete="email"
			required
			placeholder="Enter your email"
		/>

		<label class="remember-row" for="remember-email">
			<input
				id="remember-email"
				type="checkbox"
				checked={rememberEmail}
				onchange={handleRememberChange}
			/>
			<span>Remember email</span>
		</label>

		<button class="verify-btn" type="submit">Get Verification Code</button>

		<LabeledSeparator align="center" />

		<button
			class="google-signin"
			type="button"
			onclick={handleGoogleSignin}
		>
			<span class="google-logo-wrap" aria-hidden="true">
				<svg viewBox="0 0 24 24" class="google-logo" focusable="false">
					<path
						d="M21.35 12.24c0-.78-.07-1.53-.2-2.24H12v4.24h5.23a4.47 4.47 0 0 1-1.94 2.93v2.43h3.13c1.84-1.7 2.93-4.2 2.93-7.36Z"
						fill="#4285F4"
					/>
					<path
						d="M12 21.7c2.63 0 4.83-.87 6.44-2.35l-3.13-2.43c-.87.58-1.98.93-3.31.93-2.55 0-4.7-1.72-5.46-4.03H3.31v2.54A9.72 9.72 0 0 0 12 21.7Z"
						fill="#34A853"
					/>
					<path
						d="M6.54 13.82A5.84 5.84 0 0 1 6.24 12c0-.63.11-1.24.3-1.82V7.64H3.31A9.72 9.72 0 0 0 2.3 12c0 1.57.38 3.06 1.01 4.36l3.23-2.54Z"
						fill="#FBBC05"
					/>
					<path
						d="M12 6.15c1.43 0 2.72.49 3.73 1.46l2.8-2.8C16.82 3.22 14.62 2.3 12 2.3A9.72 9.72 0 0 0 3.31 7.64l3.23 2.54c.76-2.31 2.91-4.03 5.46-4.03Z"
						fill="#EA4335"
					/>
				</svg>
			</span>
			<span>Sign in with Google</span>
		</button>

		<div class="panel-graphic" aria-hidden="true"></div>
	</form>
</section>

<style>
.login-shell {
	min-height: 100%;
	display: grid;
	place-items: center;
	padding: clamp(var(--space-7), 4vw, 36px);
}

.login-panel {
	position: relative;
	width: min(100%, 460px);
	padding: clamp(24px, 4vw, 34px);
	border-radius: var(--radius-xl);
	border: 1px solid var(--border-subtle);
	background: linear-gradient(
		180deg,
		color-mix(in srgb, var(--surface-panel) 94%, white),
		var(--surface-page)
	);
	box-shadow: var(--shadow-md);
	display: grid;
	gap: var(--space-6);
	overflow: hidden;
}

.logo-row {
	display: inline-flex;
	width: max-content;
}

.copy-wrap {
	display: grid;
	gap: var(--space-3);
}

.copy-wrap h2 {
	margin: 0;
	color: var(--text-primary);
	font-size: clamp(1.5rem, 2.3vw, 2rem);
	font-weight: var(--font-weight-bold);
	line-height: var(--line-height-tight);
}

.copy-wrap p {
	margin: 0;
	color: var(--text-secondary);
	font-size: var(--font-size-md);
	line-height: var(--line-height-loose);
	max-width: 34ch;
}

.field-label {
	color: var(--text-primary);
	font-size: var(--font-size-sm);
	font-weight: var(--font-weight-medium);
}

.email-input {
	height: 48px;
	border-radius: var(--radius-lg);
	border: 1px solid var(--border-default);
	background: color-mix(in srgb, var(--surface-page) 90%, white);
	color: var(--text-primary);
	padding: 0 var(--space-6);
	font-size: var(--font-size-md);
}

.email-input:focus-visible {
	outline: 2px solid var(--color-accent);
	outline-offset: 2px;
}

.remember-row {
	display: inline-flex;
	align-items: center;
	gap: var(--space-4);
	color: var(--text-secondary);
	font-size: var(--font-size-sm);
	width: max-content;
}

.verify-btn {
	height: 48px;
	border: 0;
	border-radius: var(--radius-lg);
	background: var(--color-accent);
	color: var(--color-flip-text-hi-con);
	font-size: var(--font-size-md);
	font-weight: var(--font-weight-bold);
	letter-spacing: var(--letter-spacing-loose);
	cursor: pointer;
	transition: filter 150ms ease;
}

.verify-btn:hover {
	filter: brightness(1.08);
}

.verify-btn:focus-visible {
	outline: 2px solid var(--color-warning);
	outline-offset: 2px;
}

.google-signin {
	display: inline-flex;
	align-items: center;
	justify-content: center;
	gap: var(--space-4);
	height: 48px;
	border-radius: var(--radius-lg);
	border: 1px solid var(--border-default);
	background: color-mix(in srgb, var(--surface-page) 94%, white);
	color: var(--text-primary);
	font-size: var(--font-size-md);
	font-weight: var(--font-weight-medium);
	text-decoration: none;
}

.google-signin:hover {
	background: color-mix(in srgb, var(--surface-panel) 90%, white);
}

.google-signin:focus-visible {
	outline: 2px solid var(--color-accent);
	outline-offset: 2px;
}

.google-logo-wrap {
	display: inline-flex;
	align-items: center;
	justify-content: center;
	width: 20px;
	height: 20px;
}

.google-logo {
	width: 20px;
	height: 20px;
	display: block;
}

.panel-graphic {
	position: absolute;
	right: -64px;
	top: -64px;
	width: 190px;
	height: 190px;
	border-radius: var(--radius-full);
	background:
		radial-gradient(circle at 30% 30%, #ffd400 0%, #ffd400 20%, transparent 21%),
		radial-gradient(circle at 60% 65%, #10d389 0%, #10d389 24%, transparent 25%),
		radial-gradient(circle at 70% 35%, #2f85f7 0%, #2f85f7 30%, transparent 31%),
		radial-gradient(circle at 40% 75%, #f7004e 0%, #f7004e 26%, transparent 27%);
	opacity: 0.18;
	pointer-events: none;
}

@media (max-width: 640px) {
	.login-panel {
		width: min(100%, 440px);
	}
}
</style>
