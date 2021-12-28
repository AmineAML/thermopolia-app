<script context="module" lang="ts">
</script>

<script lang="ts">
	import SEO from '$lib/SEO.svelte';
	import RecipeCard from '$lib/RecipeCard.svelte';
	import { variables } from '$lib/variables';
	import { getData } from '$lib/store/fetcher';
	import { Jumper } from 'svelte-loading-spinners';

	const { api } = variables;

	const response = getData(api + '/Recipes/drinks');

	const title = 'Drinks | Thermopolia | Daily Recipes Recommendations';

	const description = 'Try on these easy and healthy recommendations for drinks';

	// const thumbnail = drinks[0].image;

	const thumbnail = '/thermopolia-logo.png';
</script>

<SEO {title} {description} {thumbnail} />

<section class="container mx-auto space-y-5 min-h-screen py-20">
	<h1 class="my-5 text-3xl md:text-5xl xl:text-6xl text-center" style="color: #143642;">Drinks</h1>
	{#await $response}
		<div class="flex w-full h-full">
			<div class="m-auto">
				<Jumper size="100" color="#a72118" unit="px" duration="1s" />
			</div>
		</div>
	{:then data}
		{#each data as drink}
			<RecipeCard recipe={drink} />
		{/each}
	{:catch}
		<p>Error</p>
	{/await}
</section>

<style lang="postcss">
</style>
