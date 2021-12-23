<script lang="ts">
</script>

<div class="relative rounded-lg flex flex-col md:flex-row items-center md:shadow-xl md:h-72 mx-2">
	<div
		class="z-0 order-1 md:order-2 relative w-full md:w-2/5 h-80 md:h-full overflow-hidden rounded-lg md:rounded-none md:rounded-r-lg"
	>
		<div
			class="absolute inset-0 w-full h-full object-fill object-center bg-blue-400 bg-opacity-30 bg-cover bg-bottom"
			style="background-image: url( https://images.unsplash.com/photo-1525302220185-c387a117886e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80 ); background-blend-mode: multiply;"
		/>
		<div
			class="md:hidden absolute inset-0 h-full p-6 pb-6 flex flex-col-reverse justify-start items-start bg-gradient-to-b from-transparent via-transparent to-gray-900"
		>
			<h3 class="w-full font-bold text-2xl text-white leading-tight mb-2">Label</h3>
			<h4 class="w-full text-xl text-gray-100 leading-tight">CuisineType | mealType | dishType</h4>
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
			class="p-8 md:pr-18 md:pl-14 md:py-12 mx-2 md:mx-0 h-full bg-white rounded-lg md:rounded-none md:rounded-l-lg shadow-xl md:shadow-none w-full"
		>
			<h4 class="hidden md:block text-xl text-gray-400">CuisineType | mealType | dishType</h4>
			<h3 class="hidden md:block font-bold text-2xl text-gray-700">Label</h3>
			<ul class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 text-gray-600">
				<li class="flex space-x-2 relative">
					<p>Example</p>
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
						src="https://epic.gsfc.nasa.gov/archive/natural/2021/12/16/png/epic_1b_20211216000830.png"
						alt=""
						class="hover-menu-image polygon-menu-right show-in-right-menu z-20"
					/>
				</li>
			</ul>
			<a
				class="flex items-baseline mt-3 text-blue-600 hover:text-blue-900 focus:text-blue-900"
				href=""
				target="_blank"
			>
				<span>Url</span>
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
		right: -120px;
	}
</style>
