<script context="module" lang="ts">
</script>

<script lang="ts">
	import SEO from '$lib/SEO.svelte';
	import { getData } from '$lib/store/fetcher';
	import RecipeCard from '$lib/RecipeCard.svelte';
	import { variables } from '$lib/variables';
	import { Jumper } from 'svelte-loading-spinners';

	const { api } = variables;

	const response = getData(api + '/Recipes/foods');

	const title = 'Foods | Thermopolia | Daily Recipes Recommendations';

	const description = 'Try on these easy and healthy recommendations for foods';

	// const thumbnail = foods[0].image;

	const thumbnail = '/thermopolia-logo.png';
</script>

<SEO {title} {description} {thumbnail} />

<section class="container mx-auto space-y-5 min-h-screen py-20">
	<h1 class="my-5 text-3xl md:text-5xl xl:text-6xl text-center" style="color: #143642;">Foods</h1>
	{#await $response}
		<div class="flex w-full h-full">
			<div class="m-auto">
				<Jumper size="100" color="#a72118" unit="px" duration="1s" />
			</div>
		</div>
	{:then data}
		{#each data as food}
			<RecipeCard recipe={food} />
		{/each}
	{:catch}
		<p>Error</p>
	{/await}
</section>

<style lang="postcss">
</style>
