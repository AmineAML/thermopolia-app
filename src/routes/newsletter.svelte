<script context="module" lang="ts">
</script>

<script lang="ts">
	import { createForm } from 'svelte-forms-lib';
	import * as yup from 'yup';
	import { Circle } from 'svelte-loading-spinners';
	import { variables } from '$lib/variables';
	import SEO from '$lib/SEO.svelte';

	const { api } = variables;

	let showForm = true;

	let isErrDuplicateRes = false;

	let isErrOtherRes = false;

	let errMessage = '';

	let submitButtonDisabled = false;

	let showSpinner = false;

	const { form, errors, state, handleChange, handleSubmit } = createForm({
		initialValues: {
			name: '',
			email: ''
		},
		validationSchema: yup.object().shape({
			name: yup.string().required(),
			email: yup.string().email().required()
		}),
		onSubmit: async (values) => {
			showSpinner = true;

			const res = await fetch(api + '/Newsletters/subscribers', {
				method: 'post',
				headers: {
					'content-type': 'application/json'
				},
				body: JSON.stringify({
					FullName: values.name,
					Email: values.email
				})
			});

			if (res.status === 201 && res.statusText === 'Created') {
				showForm = false;
			} else if (res.status === 409 && res.statusText === 'Conflict') {
				showForm = false;
				isErrDuplicateRes = true;
			} else {
				showForm = false;
				isErrOtherRes = true;
				errMessage = await res.json();
				console.log(errMessage);
			}

			showSpinner = false;
		}
	});

	const title = 'Subscribe to our newsletter | Thermopolia | Daily Recipes Recommendations';

	const description = 'Subscribe to the Thermopolia\'s newsletter for daily recipes recommendations';

	const thumbnail = '/thermopolia-logo.png';
</script>

<SEO title={title} description={description} thumbnail={thumbnail} />

<section class="flex min-h-screen flex-col-reverse lg:flex-row">
	<div
		class="flex lg:w-1/2 bg-no-repeat bg-cover bg-center h-40 w-full md:min-h-screen background-gradient"
	/>
	<div class="bg-white min-h-screen lg:w-1/2 flex justify-center items-center w-full">
		<div
			class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center"
		>
			<h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-black">
				Thermopolia newsletter
			</h1>
			<p class="mb-8 leading-relaxed text-gray-500">
				Subscribe to discover recipes from all over the internet right from your inbox.
			</p>
			{#if $errors.name}
				<small class="flex text-red-500">{$errors.name}</small>
			{/if}
			{#if $errors.email}
				<small class="flex text-red-500">{$errors.email}</small>
			{/if}
			{#if showForm}
				<form
					on:submit={handleSubmit}
					class="flex justify-start w-full max-w-md shadow-xl border-t border-b border-gray-200 flex-col"
				>
					<input
						class="border-l-4 border-red-700 bg-white focus:outline-none px-4 w-full m-0 text-black"
						placeholder="Name"
						type="text"
						id="name"
						name="name"
						on:change={handleChange}
						bind:value={$form.name}
						on:blur={handleChange}
					/>
					<input
						class="border-l-4 border-red-700 bg-white focus:outline-none px-4 w-full m-0 text-black"
						placeholder="Email"
						type="text"
						id="email"
						name="email"
						on:change={handleChange}
						bind:value={$form.email}
						on:blur={handleChange}
					/>
					<button
						class="inline-flex text-black py-2 px-6 focus:outline-none text-lg m-0 h-12 bg-gray-100 justify-between"
						type="submit"
						disabled={submitButtonDisabled}
					>
						Subscribe
						{#if showSpinner}
							<Circle size="20" color="blue" unit="px" duration="1s" />
						{/if}
					</button>
				</form>
			{/if}
			{#if isErrDuplicateRes}
				<p class="mb-8 leading-relaxed text-red-500">
					There's a subscription with this email, if you've subscribed please check your inbox for
					the email confirmation.
				</p>
			{/if}
			{#if isErrOtherRes}
				<p class="mb-8 leading-relaxed text-red-500">Error! check the console</p>
			{/if}
			{#if !isErrDuplicateRes && !isErrOtherRes && !showForm}
				<p class="mb-8 leading-relaxed text-green-500">
					You've subscribed! check your inbox (also the spam folder) for the link we sent you to
					confirm your email address.
				</p>
			{/if}
			<p class="text-sm mt-2 text-gray-500 mb-8 w-full">Get to try easy and healthy recipes.</p>
		</div>
	</div>
</section>

<style lang="postcss">
	.background-gradient {
		background-image: linear-gradient(to right, #ec9a2a, #ffa087, #ffbcd1, #ffe1fa, #ffffff);
	}
</style>
