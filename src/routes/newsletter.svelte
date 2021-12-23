<script context="module" lang="ts">
</script>

<script lang="ts">
</script>

<svelte:head>
	<title>Subscribe to our newsletter | Thermopolia | Daily Recipes Recommendations</title>
</svelte:head>

<section class="flex min-h-screen flex-col-reverse md:flex-row">
            <div class="flex md:w-1/2 bg-no-repeat bg-cover bg-center h-40 w-full md:min-h-screen background-gradient"></div>
			<div class="bg-white min-h-screen md:w-1/2 flex justify-center items-center w-full">
                <div
                class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-black">Thermopolia newsletter</h1>
                <p class="mb-8 leading-relaxed text-gray-500">Subscribe to discover recipes from all over the internet right from your inbox.</p>
                <div class="flex flex-row justify-start w-full max-w-md shadow-xl border-t border-b border-gray-200">
                    <input class="border-l-4 border-red-700 bg-white focus:outline-none px-4 w-full m-0 text-black" placeholder="Email"
                        type="text">
                    <button
                        class="inline-flex text-black py-2 px-6 focus:outline-none text-lg m-0 h-12 bg-gray-100">Subscribe</button>
                </div>
                <p class="text-sm mt-2 text-gray-500 mb-8 w-full">Get to try easy and healthy recipes.</p>
            </div>
			</div>
</section>

<style lang="postcss">
    .background-gradient {
        background: #fceabb;  /* fallback for old browsers */
        background: -webkit-linear-gradient(to right, #f8b500, #fceabb);  /* Chrome 10-25, Safari 5.1-6 */
        background: linear-gradient(to right, #f8b500, #fceabb); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    }
</style>
