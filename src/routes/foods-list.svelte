<script context="module" lang="ts">
	export const prerender = true;

	import RecipeCard from '$lib/RecipeCard.svelte';

	import type { Load } from '@sveltejs/kit';

	export const load: Load = async ({ fetch }) => {
		const foodsRes = await fetch('http://localhost:5000/api/v1/Recipes/foods');

		if (foodsRes.ok) {
			const foods = await foodsRes.json();

			return {
				props: { foods }
			};
		}

		const { foodsReqErrMessage } = await foodsRes.json();

		return {
			error: new Error(foodsReqErrMessage)
		};
	};
</script>

<script lang="ts">
    import type { Recipe } from '$lib/types';

    export let foods: Recipe[]
</script>

<svelte:head>
	<title>Foods | Thermopolia | Daily Recipes Recommendations</title>
</svelte:head>

<section class="container mx-auto space-y-5 min-h-screen py-20">
	<h1 class="my-5 text-3xl md:text-5xl xl:text-6xl text-center" style="color: #143642;">Foods</h1>
	{#each foods as food}
        <RecipeCard recipe={food}/>
    {/each}
</section>

<style lang="postcss">
</style>
