<script lang="ts">
	import { link } from 'svelte-spa-router'
	import { greeting, isLogged, message, success, token } from './stores'
	import { server } from './api'
	import { Toast } from 'flowbite-svelte'
	import { fly } from 'svelte/transition'
	import { onMount } from 'svelte'

	let setGreeting, setIsLogged, setMessage, setSuccess, setToken

	token.subscribe((value) => {
		setToken = value
	})

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
		try {
			let response = await server.get('getme')

			const token = `${document.cookie}`
			console.log(token)

			let info = await response.data

			if (response.status === 200) {
				setGreeting = `Welcome ${info.data.name}`
				setMessage = `You are logged!`
				setSuccess = true
				setIsLogged = true
			}
		} catch (error) {
			if (error.status === 401) {
				setMessage
				setSuccess = false
				console.log(error)
			}
		}
	})

	$: handleLogout = () => {
		server.delete('logout')
		setIsLogged = false
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
	{:else}
		<Toast
			color="red"
			class="mb-2 bg-indigo-300"
			position="bottom-right"
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
