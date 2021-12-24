<script context="module" lang="ts">
	export const prerender = true;

	import type { Load } from '@sveltejs/kit';

	import { variables } from '$lib/variables.js';

	const { api } = variables;

	export const load: Load = async ({ fetch }) => {
		const foodsRes = await fetch(api + '/Recipes/foods');

		const drinksRes = await fetch(api + '/Recipes/drinks');

		const dietRes = await fetch(api + '/Recipes/diet');

		if (foodsRes.ok && drinksRes.ok && dietRes.ok) {
			const foods = await foodsRes.json();

			const drinks = await drinksRes.json();

			const diet = await dietRes.json();

			return {
				props: { foods, drinks, diet }
			};
		}

		const { foodsReqErrMessage } = await foodsRes.json();

		const { drinksReqErrMessage } = await drinksRes.json();

		const { dietReqErrMessage } = await dietRes.json();

		return {
			error: new Error(
				(foodsReqErrMessage && drinksReqErrMessage && dietReqErrMessage
					? {
							errFetchingFoods: foodsReqErrMessage,
							errFetchingDrinks: drinksReqErrMessage,
							eerFetchingDiet: dietReqErrMessage
					  }
					: foodsReqErrMessage
					? { errFetchingFoods: foodsReqErrMessage }
					: drinksReqErrMessage
					? { errFetchingDrinks: drinksReqErrMessage }
					: { errFetchingDiet: dietReqErrMessage }
				).toString()
			)
		};
	};
</script>

<script lang="ts">
	import Hero from '$lib/hero/Hero.svelte';
	import Foods from '$lib/Foods.svelte';
	import Drinks from '$lib/Drinks.svelte';
	import Diet from '$lib/Diet.svelte';
	import type { Recipe, Diet as DietInterface } from '$lib/types';
	import SEO from '$lib/SEO.svelte';

	export let foods: Recipe[];
	export let drinks: Recipe[];
	export let diet: DietInterface;

	const title = 'Thermopolia | Daily Recipes Recommendations';

	const description =
		'Thermopolia is a daily recipes recommendations newsletter shipped into your mailbox';

	const thumbnail = '/thermopolia-logo.png';
</script>

<SEO title={title} description={description} thumbnail={thumbnail} />

<Hero />

<Foods foods={[foods[0], foods[1]]} />

<Drinks drinks={[drinks[0], drinks[1]]} />

<Diet {diet} />

<style lang="postcss">
	/* .content {
		@apply text-lg text-gray-600;
	} */
</style>
