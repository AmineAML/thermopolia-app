<script context="module" lang="ts">
	export const prerender = true;

	import type { Load } from '@sveltejs/kit';

	export const load: Load = async ({ fetch }) => {
		const foodsRes = await fetch('http://localhost:5000/api/v1/Recipes/foods');

		const drinksRes = await fetch('http://localhost:5000/api/v1/Recipes/drinks');

		const dietRes = await fetch('http://localhost:5000/api/v1/Recipes/diet');

		if (foodsRes.ok && drinksRes.ok && dietRes.ok) {
			const foods = await foodsRes.json();

			const drinks = await drinksRes.json();

			const diet = await dietRes.json()

			return {
				props: { foods, drinks, diet }
			};
		}

		const { foodsReqErrMessage } = await foodsRes.json();

		const { drinksReqErrMessage } = await drinksRes.json();

		const { dietReqErrMessage } = await dietRes.json();

		return {
			error: new Error((foodsReqErrMessage && drinksReqErrMessage && dietReqErrMessage ? { errFetchingFoods: foodsReqErrMessage, errFetchingDrinks: drinksReqErrMessage, eerFetchingDiet: dietReqErrMessage } : (foodsReqErrMessage ? { errFetchingFoods: foodsReqErrMessage } : (drinksReqErrMessage ? { errFetchingDrinks: drinksReqErrMessage } : { errFetchingDiet: dietReqErrMessage }))).toString())
		};
	};
</script>

<script lang="ts">
	import Counter from '$lib/Counter.svelte';
	import Hero from '$lib/hero/Hero.svelte';
	import Foods from '$lib/Foods.svelte';
	import Drinks from '$lib/Drinks.svelte';
	import Diet from '$lib/Diet.svelte';
	import type { Recipe, Diet as DietInterface } from '$lib/types';

	export let foods: Recipe[];
	export let drinks: Recipe[];
	export let diet: DietInterface;
</script>

<svelte:head>
	<title>Thermopolia | Daily Recipes Recommendations</title>
</svelte:head>

<Hero />

<Foods foods={[foods[0], foods[1]]} />

<Drinks drinks={[drinks[0], drinks[1]]} />

<Diet diet={diet}/>

<style lang="postcss">
	.content {
		@apply text-lg text-gray-600;
	}
</style>
