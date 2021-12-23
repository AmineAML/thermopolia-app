<script context="module" lang="ts">
	export const prerender = true;
</script>

<script lang="ts">
	import Counter from '$lib/Counter.svelte';
	import Hero from '$lib/hero/Hero.svelte';
	import Foods from '$lib/Foods.svelte';
	import Drinks from '$lib/Drinks.svelte';
	import Diet from '$lib/Diet.svelte';
</script>

<svelte:head>
	<title>Thermopolia | Daily Recipes Recommendations</title>
</svelte:head>

<Hero />

<Foods />

<Drinks />

<Diet />

<style lang="postcss">
	.content {
	  @apply text-lg text-gray-600;
	}
  </style>
