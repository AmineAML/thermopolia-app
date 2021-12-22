<script lang="ts">
	import { page } from '$app/stores';
	import logo from './thermopolia-logo.png';
</script>

<header class="fixed w-full z-10 px-5">
	<div class="navbar mb-2 bg-neutral text-neutral-content bg-transparent" style="color: #123740;">
		<div class="flex-none px-2 mx-2">
			<a href="/">
				<img src={logo} alt="Thermopolia" class="flex w-28 h-28" />
			</a>
		</div>
		<div class="flex-1 px-2 mx-2">
			<div class="items-stretch hidden lg:flex text-xl">
				<a class="btn btn-ghost btn-sm rounded-btn" href="/" sveltekit:prefetch> Foods </a>
				<a class="btn btn-ghost btn-sm rounded-btn" href="/" sveltekit:prefetch> Drinks </a>
				<a class="btn btn-ghost btn-sm rounded-btn" href="/"> Diet </a>
			</div>
		</div>
		<div class="flex-none" style="color: #fefefe;">
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

	<!-- <div class="flex flex-col justify-between">
		<div class="flex flex-col space-x-5">
			<div>
				<a href="/">
					<img src={logo} alt="Thermopolia" />
				</a>
			</div>
			<nav>
				<ul class="flex ">
					<li>
						<a href="/" sveltekit:prefetch>Foods</a>
					</li>
					<li>
						<a href="/" sveltekit:prefetch>Drinks</a>
					</li>
					<li>
						<a href="/" sveltekit:prefetch>Diet</a>
					</li>
				</ul>
			</nav>
		</div>
		<div>
			<div>
				<a href="/">
					<img src={logo} alt="Thermopolia" />
				</a>
			</div>
		</div>
	</div> -->
	<!-- <div class="corner">
		<a href="https://kit.svelte.dev">
			<img src={logo} alt="SvelteKit" />
		</a>
	</div>

	<nav>
		<svg viewBox="0 0 2 3" aria-hidden="true">
			<path d="M0,0 L1,2 C1.5,3 1.5,3 2,3 L2,0 Z" />
		</svg>
		<ul>
			<li class:active={$page.path === '/'}><a sveltekit:prefetch href="/">Home</a></li>
			<li class:active={$page.path === '/about'}><a sveltekit:prefetch href="/about">About</a></li>
			<li class:active={$page.path === '/todos'}><a sveltekit:prefetch href="/todos">Todos</a></li>
		</ul>
		<svg viewBox="0 0 2 3" aria-hidden="true">
			<path d="M0,0 L0,3 C0.5,3 0.5,3 1,2 L2,0 Z" />
		</svg>
	</nav>

	<div class="corner"> -->
	<!-- TODO put something else here? github link? -->
	<!-- </div> -->
</header>

<style>
</style>
