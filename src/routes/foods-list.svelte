<script context="module" lang="ts">
	export const prerender = true;

	import RecipeCard from '$lib/RecipeCard.svelte';

	import type { Load } from '@sveltejs/kit';

	import { variables } from '$lib/variables';

	const { api } = variables;

	export const load: Load = async ({ fetch }) => {
		const foodsRes = await fetch(api + '/Recipes/foods');

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
	import SEO from '$lib/SEO.svelte';

	export let foods: Recipe[];

	const title = 'Foods | Thermopolia | Daily Recipes Recommendations';

	const description =
		'Try on these easy and healthy recommendations for foods';

	const thumbnail = foods[0].image;
</script>

<SEO title={title} description={description} thumbnail={thumbnail} />

<section class="container mx-auto space-y-5 min-h-screen py-20">
	<h1 class="my-5 text-3xl md:text-5xl xl:text-6xl text-center" style="color: #143642;">Foods</h1>
	{#each foods as food}
		<RecipeCard recipe={food} />
	{/each}
</section>

<style lang="postcss">
</style>
