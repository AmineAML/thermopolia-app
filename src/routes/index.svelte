<script context="module" lang="ts">
	export const prerender = true;
</script>

<script lang="ts">
	import Counter from '$lib/Counter.svelte';
	import Hero from '$lib/hero/Hero.svelte';
	import Foods from '$lib/Foods.svelte';
</script>

<svelte:head>
	<title>Thermopolia | Daily Recipes Recommendations</title>
</svelte:head>

<Hero />

<Foods />

<!-- <section>
	<h1>
		<div class="welcome">
			<picture>
				<source srcset="svelte-welcome.webp" type="image/webp" />
				<img src="svelte-welcome.png" alt="Welcome" />
			</picture>
		</div>

		to your new<br />SvelteKit app
	</h1>

	<h2>
		try editing <strong>src/routes/index.svelte</strong>
	</h2>

	<Counter />
</section> -->

<style lang="postcss">
	.content {
	  @apply text-lg text-gray-600;
	}
  </style>
