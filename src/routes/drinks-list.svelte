<script context="module" lang="ts">
	export const prerender = true;

	import RecipeCard from '$lib/RecipeCard.svelte';

	import type { Load } from '@sveltejs/kit';

	export const load: Load = async ({ fetch }) => {
		const drinksRes = await fetch('http://localhost:5000/api/v1/Recipes/drinks');

		if (drinksRes.ok) {
			const drinks = await drinksRes.json();

			return {
				props: { drinks }
			};
		}

		const { drinksReqErrMessage } = await drinksRes.json();

		return {
			error: new Error(drinksReqErrMessage)
		};
	};
</script>

<script lang="ts">
	import type { Recipe } from '$lib/types';

	export let drinks: Recipe[];
</script>

<svelte:head>
	<title>Drinks | Thermopolia | Daily Recipes Recommendations</title>
</svelte:head>

<section class="container mx-auto space-y-5 min-h-screen py-20">
	<h1 class="my-5 text-3xl md:text-5xl xl:text-6xl text-center" style="color: #143642;">Drinks</h1>
	{#each drinks as drink}
        <RecipeCard recipe={drink}/>
    {/each}
</section>

<style lang="postcss">
</style>
