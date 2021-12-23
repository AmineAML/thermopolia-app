<script lang="ts">
    import RecipeCard from '$lib/RecipeCard.svelte';
    import type { Recipe } from '$lib/types'

    export let foods: Recipe[]
</script>

<section class="container mx-auto my-10 space-y-5">
    <h3 class="mb-5 text-xl md:text-2xl xl:text-3xl text-center" style="color: #143642;">Foods</h3>
    {#each foods as food}
        <RecipeCard recipe={food}/>
    {/each}
</section>

<style>

</style>