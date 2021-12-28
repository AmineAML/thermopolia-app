<!-- This page can't be prerendered, but we want it prerendered/statically generated -->
<script context="module" lang="ts">
	import type { Load } from '@sveltejs/kit';
	import { variables } from '$lib/variables';
	import { getFilteredData } from '$lib/store/fetcher';

	const { api } = variables;

	export const load: Load = async ({ page }) => {
		return {
			props: {
				searchTerm: page.query.get('q'),
				response: getFilteredData(page.query.get('q'), [
					api + '/Recipes/foods',
					api + '/Recipes/drinks'
				])
			}
		};
	};
</script>

<script lang="ts">
	import RecipeCard from '$lib/RecipeCard.svelte';
	import { Jumper } from 'svelte-loading-spinners';

	export let searchTerm = '';

	export let response;
</script>

<section class="container mx-auto space-y-5 min-h-screen py-20">
	<h1 class="my-5 text-3xl md:text-5xl xl:text-6xl text-center" style="color: #143642;">
		Search results for {searchTerm}
	</h1>
	{#await $response}
		<div class="flex w-full h-full">
			<div class="m-auto">
				<Jumper size="100" color="#a72118" unit="px" duration="1s" />
			</div>
		</div>
	{:then data}
		{#if data && data.length > 0}
			{#each data as recipe}
				<RecipeCard {recipe} />
			{/each}
			{:else}
			<div class="flex w-full h-full">
				<div class="m-auto">
					<h2 class="mb-5 text-xl md:text-2xl xl:text-3xl" style="color: #a72118;">
						No matching recipes
					</h2>
				</div>
			</div>
		{/if}
	{:catch}
		<p>Error</p>
	{/await}
</section>
