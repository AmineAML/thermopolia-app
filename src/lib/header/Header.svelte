<script lang="ts">
	import { page } from '$app/stores';

	let pixels
</script>

<svelte:window bind:scrollY={pixels} />

<header class={pixels > 100 ? ( $page.path === '/newsletter' ? 'fixed w-full z-20 px-5 bg-color hidden' : 'fixed w-full z-20 px-5 bg-color') : ( $page.path === '/newsletter' ? 'fixed w-full z-20 px-5 hidden': 'fixed w-full z-20 px-5')}>
	<div class="navbar mb-2 bg-neutral text-neutral-content bg-transparent" style="color: #123740;">
		<div class="flex-none px-2 mx-2">
			<a href="/">
				<img src="/thermopolia-logo.png" alt="Thermopolia" class="flex w-28 h-28" />
			</a>
		</div>
		<div class="flex-1 px-2 mx-2">
			<div class="items-stretch hidden lg:flex text-xl">
				<a class="btn btn-ghost btn-sm rounded-btn" href="/foods-list" sveltekit:prefetch> Foods </a>
				<a class="btn btn-ghost btn-sm rounded-btn" href="/drinks-list" sveltekit:prefetch> Drinks </a>
				<a class="btn btn-ghost btn-sm rounded-btn" href="/#diet"> Diet </a>
			</div>
		</div>
		<div class={$page.path === '/' ? (pixels > 100 ? 'flex-none scope-color-no-bg' : 'flex-none scope-color-with-bg') : 'flex-none scope-color-no-bg'}>
			<button class="btn btn-square btn-ghost">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					class="inline-block w-6 h-6 stroke-current"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
					/>
				</svg>
			</button>
		</div>
	</div>
</header>

<style lang="postcss">
	.bg-color {
		background-color: #ec9a2a;
	}

	.scope-color-with-bg {
		color: #fefefe;
	}

	.scope-color-no-bg {
		color: #123740;
	}
</style>
