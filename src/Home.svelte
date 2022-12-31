<script lang="ts">
	import { onMount } from 'svelte'
	import { link } from 'svelte-spa-router'
	import { getMe, logout } from './router'
	import { Toast } from 'flowbite-svelte'
	import { fly } from 'svelte/transition'

	let greeting = 'Welcome, sign in to your account'
	let message = 'You are not logged in'
	let success = false
	let isLogged = false

	onMount(async () => {
		let response = await fetch(getMe, {
			method: 'GET',
			mode: 'cors',
			credentials: 'include',
			headers: {
				'Content-Type': 'application/json',
			},
		})
		let info = await response.json()

		if (response.status === 200) {
			greeting = `Welcome ${info.data.name}`
			message = `You are logged!`
			success = true
			isLogged = true
		}

		if (response.status === 404) {
			message
			success = false
		}
	})

	$: handleLogout = async () => {
		await fetch(logout, {
			method: 'DELETE',
			mode: 'cors',
			credentials: 'include',
		})
		success = false
	}
</script>

<section class="text-gray-600 body-font">
	{#if success === true}
		<Toast
			color="green"
			class="mb-2 bg-indigo-300"
			position="top-right"
			transition={fly}
			params={{ x: 200 }}
		>
			<svelte:fragment slot="icon">
				<svg
					aria-hidden="true"
					class="w-5 h-5"
					fill="currentColor"
					viewBox="0 0 20 20"
					xmlns="http://www.w3.org/2000/svg"
					><path
						fill-rule="evenodd"
						d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
						clip-rule="evenodd"
					/></svg
				>
				<span class="sr-only">Check icon</span>
			</svelte:fragment>
			<span>{message}</span>
		</Toast>
	{/if}
	<div class="container px-5 py-24 mx-auto">
		<h1
			class="flex-grow sm:pr-16 text-2xl font-medium title-font text-gray-900"
		/>
		<div
			class="lg:w-2/3 flex flex-col sm:flex-row sm:items-center items-start mx-auto"
		>
			<h1
				class="flex-grow sm:pr-16 text-2xl font-medium title-font text-gray-900"
			>
				{greeting}
			</h1>
			<a
				href="/signin"
				use:link
				on:click={handleLogout}
				class="flex-shrink-0 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg mt-10 sm:mt-0"
			>
				{#if isLogged === true}Logout{:else}Login{/if}</a
			>
		</div>
	</div>
</section>
