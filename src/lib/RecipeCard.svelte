<script lang="ts">
	import type { Recipe } from '$lib/types';

	export let recipe: Recipe;
</script>

<div class="relative rounded-lg flex flex-col md:flex-row items-center md:shadow-xl md:h-72 mx-2">
	<div
		class="z-0 order-1 md:order-2 relative w-full md:w-2/5 h-80 md:h-full overflow-hidden rounded-lg md:rounded-none md:rounded-r-lg"
	>
		<div
			class="absolute inset-0 w-full h-full object-fill object-center bg-blue-400 bg-opacity-30 bg-cover bg-bottom"
			style="background-image: url( {recipe.image} ); background-blend-mode: multiply;"
		/>
		<div
			class="md:hidden absolute inset-0 h-full p-6 pb-6 flex flex-col-reverse justify-start items-start bg-gradient-to-b from-transparent via-transparent to-gray-900"
		>
			<h3 class="w-full font-bold text-2xl text-white leading-tight mb-2">{recipe.label}</h3>
			<h4 class="w-full text-xl text-gray-100 leading-tight">
				{recipe.cuisineType.join(', ')} | {recipe.mealType.join(', ')} | {recipe.dishType.join(
					', '
				)}
			</h4>
		</div>
		<svg
			class="hidden md:block absolute inset-y-0 h-full w-24 fill-current text-white -ml-12"
			viewBox="0 0 100 100"
			preserveAspectRatio="none"
		>
			<polygon points="50,0 100,0 50,100 0,100" />
		</svg>
	</div>

	<div class="order-2 md:order-1 w-full h-full md:w-3/5 flex items-center -mt-6 md:mt-0">
		<div
			class="p-8 md:pr-18 md:pl-14 md:py-12 mx-2 md:mx-0 h-full bg-white rounded-lg md:rounded-none md:rounded-l-lg shadow-xl md:shadow-none w-full overflow-y-auto overflow-x-hidden scrolling-area scrollbar scrollbar-thumb-gray-900 scrollbar-track-gray-100"
		>
			<h4 class="hidden md:block text-xl text-gray-400 scrolling-element-inside">{recipe.cuisineType.join(', ')} | {recipe.mealType.join(', ')} | {recipe.dishType.join(
				', '
			)}</h4>
			<h3 class="hidden md:block font-bold text-2xl text-gray-700 scrolling-element-inside">{recipe.label}</h3>
			<ul class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6 text-gray-600 scrolling-element-inside">
				{#each recipe.ingredients as ingredient}
					<li class="flex space-x-2 relative">
						<p>{ingredient.text}</p>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							class="h-6 w-6 mm-item hover-menu-item"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
							/>
						</svg>
						<img
							src={ingredient.image}
							alt=""
							class="hover-menu-image polygon-menu-right show-in-right-menu z-20 h-20 w-20 shadow-md"
						/>
					</li>
				{/each}
			</ul>
			<a
				class="flex items-baseline mt-3 text-blue-600 hover:text-blue-900 focus:text-blue-900 flex-row-reverse"
				href={recipe.url}
				target="_blank"
			>
				<span>Read more</span>
				<span class="text-xs ml-1">&#x279c;</span>
			</a>
		</div>
	</div>
</div>

<style lang="postcss">
	/* Show Image on Hover */
	.hover-menu-image {
		display: none;
		z-index: 9999 !important;
	}

	.hover-menu-item:hover + .hover-menu-image {
		display: block !important;
	}

	/* Positioning */
	.show-in-right-menu {
		position: absolute;
		top: 50%;
		right: 50%;
		/* left: 0; */
	}

  	.scroll-direction {
		  direction: ltr;
	}

	.scrolling-area {
		direction: rtl;
	}

	.scrolling-element-inside {
		direction: ltr;
	}
</style>
