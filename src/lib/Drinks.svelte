<script lang="ts">
    import RecipeCard from '$lib/RecipeCard.svelte'
    import type { Recipe } from '$lib/types'

    export let drinks: Recipe[]
</script>

<section class="container mx-auto my-10 space-y-5">
    <h3 class="mb-5 text-xl md:text-2xl xl:text-3xl text-center" style="color: #143642;">Drinks</h3>
    {#each drinks as drink}
        <RecipeCard recipe={drink} />
    {/each}
</section>

<style>

</style>