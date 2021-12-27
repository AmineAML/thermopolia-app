<script lang="ts">
	import { page } from '$app/stores';
	import { slide } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';

	let pixels: number;

	let showButton: boolean = true;

	function handleClick() {
		showButton = !showButton;
	}

	let searchTerm: string = '';
</script>

<svelte:window bind:scrollY={pixels} />

<header
	class={pixels > 100
		? $page.path === '/newsletter'
			? 'fixed w-full z-20 px-5 bg-color hidden'
			: 'fixed w-full z-20 px-5 bg-color'
		: $page.path === '/newsletter'
		? 'fixed w-full z-20 px-5 hidden'
		: 'fixed w-full z-20 px-5'}
>
	<div class="navbar mb-2 bg-neutral text-neutral-content bg-transparent" style="color: #123740;">
		<div class="flex-none px-2 mx-2">
			<a href="/">
				<img src="/thermopolia-logo.png" alt="Thermopolia" class="flex w-28 h-28" />
			</a>
		</div>
		<div class="flex-1 px-2 mx-2">
			<div class="items-stretch hidden lg:flex text-xl">
				<a class="btn btn-ghost btn-sm rounded-btn" href="/foods-list" sveltekit:prefetch>
					Foods
				</a>
				<a class="btn btn-ghost btn-sm rounded-btn" href="/drinks-list" sveltekit:prefetch>
					Drinks
				</a>
				<a class="btn btn-ghost btn-sm rounded-btn" href="/#diet"> Diet </a>
			</div>
		</div>
		{#if showButton}
			<div
				class={$page.path === '/'
					? pixels > 100
						? 'flex-none scope-color-no-bg'
						: 'flex-none scope-color-with-bg'
					: 'flex-none scope-color-no-bg'}
			>
				<button class="btn btn-square btn-ghost" on:click={handleClick}>
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
		{:else}
			<div class="relative">
				<input
					type="search"
					name="serch"
					placeholder="Search ingredients"
					class="bg-white h-10 px-5 pr-10 rounded-full text-sm focus:outline-none"
					bind:value={searchTerm} disabled
				/>
				<!-- @Reference https://github.com/sveltejs/kit/issues/546 for how to trigger an on page refresh -->
				<!-- <a class="absolute right-0 top-0 mt-3 mr-4" href={'recipes?q=' + searchTerm} target="_self"> -->
				<a class="absolute right-0 top-0 mt-3 mr-4" href="javascript:void(0)" target="_self">
					<svg
						class="h-4 w-4 fill-current"
						xmlns="http://www.w3.org/2000/svg"
						xmlns:xlink="http://www.w3.org/1999/xlink"
						version="1.1"
						id="Capa_1"
						x="0px"
						y="0px"
						viewBox="0 0 56.966 56.966"
						style="enable-background:new 0 0 56.966 56.966;"
						xml:space="preserve"
						width="10%"
						height="10%"
					>
						<path
							d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z"
						/>
					</svg>
					<!-- <svg
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
			</svg> -->
				</a>
			</div>
		{/if}
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
