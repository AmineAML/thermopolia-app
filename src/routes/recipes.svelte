<!-- This page can't be prerendered, but we want it prerendered/statically generated -->
<!-- <script context="module" lang="ts">
	import type { Load } from '@sveltejs/kit';

	export const load: Load = async ({ page }) => {
		return {
			props: { searchTerm: page.query.get('q') }
		};
	};
</script>

<script lang="ts">
	import RecipeCard from '$lib/RecipeCard.svelte';
	import type { Recipe } from '$lib/types';
	import { onMount } from 'svelte';
	import { variables } from '$lib/variables';
    // import { page } from "$app/stores";
    // const q = $page.query.get('q');


	const { api } = variables;

	export let recipes: Recipe[] = [];

	export let searchTerm = '';

	let results: Recipe[] = recipes;

	onMount(async () => {
		const foodsRes = await fetch(api + '/Recipes/foods');

		const drinksRes = await fetch(api + '/Recipes/drinks');

		if (foodsRes.ok && drinksRes.ok) {
			const foods = await foodsRes.json();

			const drinks = await drinksRes.json();

			recipes = [...foods, ...drinks];

			results = recipes.filter((recipe) =>
				recipe.ingredients.some((ingredient) =>
					ingredient.text.toLowerCase().includes(searchTerm.toLowerCase())
				)
			);

			return {
				error: new Error('Error on filtering the response result for recipes')
			};
		}
	});
</script>

<section class="container mx-auto space-y-5 min-h-screen py-20">
	<h1 class="my-5 text-3xl md:text-5xl xl:text-6xl text-center" style="color: #143642;">
		Search results for {searchTerm}
	</h1>
	{#each results as recipe}
		<RecipeCard {recipe} />
	{/each}
</section> -->