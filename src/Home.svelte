<script lang="ts">
	import { onMount } from 'svelte'
	import { link, push } from 'svelte-spa-router'
	import { getMe, logout } from './router'
	import { Toast } from 'flowbite-svelte'
	import { fly } from 'svelte/transition'
	import Cookies from 'js-cookie'

	let greeting = 'Welcome, sign in to your account'
	let message = 'You are not logged in'
	let success = false
	let info
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

<main class="container mt-5 text-center">
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
	{:else}
		<Toast
			color="red"
			class="mb-2"
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
						d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
						clip-rule="evenodd"
					/></svg
				>
				<span class="sr-only">Error icon</span>
			</svelte:fragment>
			<span>{message}</span>
		</Toast>
	{/if}

	<h3>{greeting}</h3>

	{#if isLogged === true}
		<a
			href="/login"
			use:link
			class="btn btn-lg btn-primary"
			on:click={handleLogout}>Logout</a
		>
	{:else}
		<a
			href="/login"
			use:link
			class="btn btn-lg btn-primary"
			on:click={handleLogout}>Login</a
		>
	{/if}
</main>
