<script context="module" lang="ts">
</script>

<script lang="ts">
	import Hero from '$lib/hero/Hero.svelte';
	import Foods from '$lib/Foods.svelte';
	import Drinks from '$lib/Drinks.svelte';
	import Diet from '$lib/Diet.svelte';
	import SEO from '$lib/SEO.svelte';
	import { variables } from '$lib/variables';
	import { getData } from '$lib/store/fetcher';
	import { Jumper } from 'svelte-loading-spinners';

	const { api } = variables;

	const responseFoods = getData(api + '/Recipes/foods');

	const responseDrinks = getData(api + '/Recipes/drinks');

	const responseDiet = getData(api + '/Recipes/diet');

	const title = 'Thermopolia | Daily Recipes Recommendations';

	const description =
		'Thermopolia is a daily recipes recommendations newsletter shipped into your mailbox';

	const thumbnail = '/thermopolia-logo.png';
</script>

<SEO {title} {description} {thumbnail} />

<Hero />

{#await $responseFoods}
	<div class="flex w-full h-full">
		<div class="m-auto">
			<Jumper size="100" color="#a72118" unit="px" duration="1s" />
		</div>
	</div>
{:then data}
	<Foods foods={[data[0], data[1]]} />
{:catch}
	<p>Error</p>
{/await}

{#await $responseDrinks}
	<div class="flex w-full h-full">
		<div class="m-auto">
			<Jumper size="100" color="#a72118" unit="px" duration="1s" />
		</div>
	</div>
{:then data}
	<Drinks drinks={[data[0], data[1]]} />
{:catch}
	<p>Error</p>
{/await}

{#await $responseDiet}
	<div class="flex w-full h-full">
		<div class="m-auto">
			<Jumper size="100" color="#a72118" unit="px" duration="1s" />
		</div>
	</div>
{:then data}
	<Diet diet={data} />
{:catch}
	<p>Error</p>
{/await}

<style lang="postcss">
	/* .content {
		@apply text-lg text-gray-600;
	} */
</style>
