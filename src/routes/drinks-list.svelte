<script context="module" lang="ts">
	export const prerender = true;

	import RecipeCard from '$lib/RecipeCard.svelte';

	import type { Load } from '@sveltejs/kit';

	import { variables } from '$lib/variables';

	const { api } = variables;

	export const load: Load = async ({ fetch }) => {
		const drinksRes = await fetch(api + '/Recipes/drinks');

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
	import SEO from '$lib/SEO.svelte';

	export let drinks: Recipe[];

	const title = 'Drinks | Thermopolia | Daily Recipes Recommendations';

	const description = 'Try on these easy and healthy recommendations for drinks';

	const thumbnail = drinks[0].image;
</script>

<SEO title={title} description={description} thumbnail={thumbnail} />

<section class="container mx-auto space-y-5 min-h-screen py-20">
	<h1 class="my-5 text-3xl md:text-5xl xl:text-6xl text-center" style="color: #143642;">Drinks</h1>
	{#each drinks as drink}
		<RecipeCard recipe={drink} />
	{/each}
</section>

<style lang="postcss">
</style>
