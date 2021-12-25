<script context="module" lang="ts">
	import type { Load } from '@sveltejs/kit';

	import { variables } from '$lib/variables';

	const { api } = variables;

	export const load: Load = async ({ fetch, page }) => {
		const res = await fetch(api + '/Newsletters/subscribers/validation/' + page.params.token);

		console.log(res)

		let showSpinner;

		let isErr;

		let errMessage;

		if (res.status === 200 && res.statusText === 'OK') {
			console.log('ok');
			showSpinner = false
			isErr = false
			// return {
			// 	props: {
			// 		showSpinner: false,
			// 		isErr: false
			// 	}
			// };
		} else {
			console.log('nein');
			showSpinner = false
			isErr = true
			errMessage = res.statusText

			// return {
			// 	props: {
			// 		showSpinner: false,
			// 		isErr: true,
			// 		errMessage: res.statusText
			// 	}
			// };
		}

		return {
			props: {
				showSpinner,
				isErr,
				errMessage
			}
		};
	};
</script>

<script lang="ts">
	import { Circle } from 'svelte-loading-spinners';

	export let isErr: boolean;

	export let showSpinner: boolean = true;

	export let errMessage: string;
</script>

<section class="flex min-h-screen flex-col-reverse lg:flex-row">
	<div class="bg-white min-h-screen flex justify-center items-center w-full">
		<div
			class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center"
		>
			{#if showSpinner}
				<h1
					class="title-font sm:text-4xl text-3xl mb-4 font-medium text-black flex flex-col space-x-2"
				>
					Enabling your subscription
					<Circle size="20" color="blue" unit="px" duration="1s" />
				</h1>
			{:else if isErr}
				<h1
					class="title-font sm:text-4xl text-3xl mb-4 font-medium text-black flex flex-row items-center"
				>
					Error {isErr}
				</h1>
				<p class="mb-8 leading-relaxed text-red-500">
					{errMessage === 'Not Found'
						? "This link has expired, which means that you've already clicked on it or it could be invalid"
						: errMessage}.
				</p>
			{:else}
				<h1
					class="title-font sm:text-4xl text-3xl mb-4 font-medium text-black flex flex-row items-center"
				>
					Thank you and welcome to your daily newsletter recipes recommendations!
				</h1>
				<p class="mb-8 leading-relaxed text-green-500">
					Your newsletter subscription is activated!<br />You'll get daily recipes recommendations
					into your inbox, if you don't receive our newsletter, make sure to check your spam folder
					and add us as a safe contact.
				</p>
			{/if}
			<!-- {#if isErr}
			{/if} -->
			<!-- {#if !showSpinner && !isErr}
			{/if} -->
		</div>
	</div>
</section>
