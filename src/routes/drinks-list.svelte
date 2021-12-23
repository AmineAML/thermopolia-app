<script context="module" lang="ts">
	export const prerender = true;

    import RecipeCard from '$lib/RecipeCard.svelte';
</script>

<script lang="ts">
	
</script>

<svelte:head>
	<title>Drinks | Thermopolia | Daily Recipes Recommendations</title>
</svelte:head>

<section class="container mx-auto space-y-5 min-h-screen py-20">
    <h1 class="my-5 text-3xl md:text-5xl xl:text-6xl text-center" style="color: #143642;">Drinks</h1>
    <RecipeCard />
    <RecipeCard />
    <RecipeCard />
    <RecipeCard />
    <RecipeCard />
    <RecipeCard />
    <RecipeCard />
    <RecipeCard />
    <RecipeCard />
    <RecipeCard />
</section>

<style lang="postcss">

</style>
