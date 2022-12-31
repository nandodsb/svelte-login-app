<script lang="ts">
	import m from 'mithril'
	import { onMount } from 'svelte'
	import { link } from 'svelte-spa-router'
	import { getMe, logout } from './router'
	import { Toast } from 'flowbite-svelte'
	import { fly } from 'svelte/transition'
	import { greeting, isLogged, message, success } from './stores.js'

	let setGreeting, setIsLogged, setMessage, setSuccess

	greeting.subscribe((value) => {
		setGreeting = value
	})

	isLogged.subscribe((value) => {
		setIsLogged = value
	})

	message.subscribe((value) => {
		setMessage = value
	})

	success.subscribe((value) => {
		setSuccess = value
	})

	onMount(async () => {
		let response = await fetch(getMe, {
			method: 'GET',
			mode: 'cors',
			credentials: 'include',
			headers: {
				'Content-Type': 'application/json',
			},
		})

		console.log(response)

		let info = await response.json()

		if (response.status === 200) {
			setGreeting = `Welcome ${info.data.name}`
			setMessage = `You are logged!`
			setSuccess = true
			setIsLogged = true
		}

		if (response.status === 404) {
			setMessage
			setSuccess = false
		}

		// await m
		// 	.request({
		// 		method: 'GET',
		// 		url: getMe,
		// 		withCredentials: true,
		// 		extract: function (xhr) {
		// 			return { status: xhr.status, body: xhr.responseText }
		// 		},
		// 	})

		// 	.then(function (response) {
		// 		console.log(response.status, response.body)
		// 		if (response.status === 200) {
		// 			setGreeting = `Welcome ${response.body}`
		// 			setMessage = `You are logged!`
		// 			setSuccess = true
		// 			setIsLogged = true
		// 		}

		// 		if (response.status === 404) {
		// 			setMessage
		// 			setSuccess = false
		// 		}
		// 	})
	})

	$: handleLogout = async () => {
		// await fetch(logout, {
		// 	method: 'DELETE',
		// 	mode: 'cors',
		// 	credentials: 'include',
		// })
		// setSuccess = false

		await m.request({
			method: 'DELETE',
			url: logout,
			withCredentials: true,
		})
		setSuccess = false
	}
</script>

<section class="text-gray-600 body-font">
	{#if setSuccess === true}
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
			<span>{setMessage}</span>
		</Toast>
	{/if}
	<div class="container px-5 py-24 mx-auto">
		<div
			class="lg:w-2/3 flex flex-col sm:flex-row sm:items-center items-start mx-auto"
		>
			<h1
				class="flex-grow sm:pr-16 text-2xl font-medium title-font text-gray-900"
			>
				{setGreeting}
			</h1>

			{#if setIsLogged === true}
				<a
					href="/signin"
					use:link
					on:click={handleLogout}
					class="flex-shrink-0 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg mt-10 sm:mt-0"
					>Logout</a
				>
			{:else}
				<a
					href="/signin"
					use:link
					class="flex-shrink-0 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg mt-10 sm:mt-0"
					>Login</a
				>
			{/if}
		</div>
	</div>
</section>
