<script lang="ts">
</script>

<section class="min-h-screen flex items-start layerOne px-14">
	<div class="flex-col hero-content lg:flex-row mt-40">
		<div class="text-center lg:text-left">
			<div class="mb-32">
				<h1
					class="mb-5 text-3xl md:text-5xl xl:text-6xl font-bold uppercase"
					style="color: #143642;"
				>
					Thermopolia
				</h1>
				<h2
					class="mb-5 text-3xl md:text-5xl xl:text-6xl font-bold uppercase"
					style="color: #a72118;"
				>
					Daily Recipes <br /> Recommendations
				</h2>
			</div>
			<div class="mb-32 flex flex-col">
				<h3 class="mb-5 text-xl md:text-2xl xl:text-3xl" style="color: #000000;">
					Subscribe to our newsletter
				</h3>
				<p class="mb-5 text-sm md:text-base xl:text-lg" style="color: #000000;">
					Get daily recipes from all over the internet to your inbox.<br />Try something easy and
					healthy!
				</p>
				<a
					href="/newsletter"
					class="mb-5 text-sm md:text-base xl:text-lg link flex mx-auto lg:ml-0"
					style="color: #a81e1b;"
				>
					Subscribe
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="xl:h-6 xd:w-6 transform translate-y-1 md:w-4 md:h-4 w-3 h-3"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M17 8l4 4m0 0l-4 4m4-4H3"
						/>
					</svg>
				</a>
			</div>
			<div class="flex">
				<p
					class="flex uppercase text-xl md:text-2xl xl:text-3xl mx-auto lg:ml-0"
					style="color: #fffffd;"
				>
					Try something
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="xl:h-7 xl:w-7 transform translate-y-1 md:h-5 md:w-5 h-5 w-5"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M19 14l-7 7m0 0l-7-7m7 7V3"
						/>
					</svg>
				</p>
			</div>
		</div>
	</div>
</section>

<style lang="postcss">
	@media only screen and (min-width: 1024px) {
		.layerOne:before {
			content: '';
			position: absolute;
			height: 100%;
			top: 0;
			left: 0;
			width: 100%;
			/* background: #e5e5e5; */
			/* z-index: -1; */
			background-image: url('./HeroBackground.svg');
			background-repeat: no-repeat;
			background-position: center;
			background-size: cover;
		}
	}
</style>
