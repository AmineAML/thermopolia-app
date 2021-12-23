<script lang="ts">
	import type { Diet } from '$lib/types';

	export let diet: Diet

	async function checkImage(url){
     
		const res = await fetch(url, {
			mode: 'no-cors'
		});

		const buff = await res.blob();
		
		return buff.type.startsWith('image/')
	}
</script>

<section class="container mx-auto my-10 space-y-5 w-full">
    <div class="sm:flex items-center shadow-md w-full px-5 md:px-0">
        <div class="md:px-10 sm:px-5 md:w-1/2">
            <h3 class="mb-5 text-xl md:text-2xl xl:text-3xl text-left" style="color: #143642;" id="diet">Diet</h3>
			<h4 class="text-gray-800 font-bold text-2xl my-2">{diet.name}</h4>
			<p class="text-gray-700 mb-2 md:mb-6">{diet.description}</p>
			<div class="flex justify-between mb-2">
				<span class="font-thin text-sm">{diet.diet}</span>
				<a class="sm:block hidden mb-2 text-gray-800 font-bold" href={diet.url} target="_blank">Learn more</a>
			</div>
		</div>
		<div class="md:w-1/2">
			{#await checkImage(diet.image)}
				Verifying is file valid
			{:then isValidFile}
				<img class="flex object-cover w-full h-full" src={isValidFile ? diet.image : '/default-diet-display.jpg'} alt="" />
			{/await}
		</div>
	</div>
</section>
