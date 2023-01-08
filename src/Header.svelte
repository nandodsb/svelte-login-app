<script lang="ts">
	import '../public/global.css'
	import { link } from 'svelte-spa-router'
	import {
		greeting,
		isLogged,
		IsDisconnected,
		message,
		success,
	} from './stores'
	import { fetcher } from './fetcher.ts'
	import { server } from './api'
	import { onDestroy } from 'svelte'

	let setIsLogged, setIsDisconnected
	let info

	isLogged.subscribe((value) => {
		setIsLogged = value
	})

	IsDisconnected.subscribe((value) => {
		setIsDisconnected = value
	})

	fetcher().then((response) => {
		info = response.data
		if (response.status === 200) {
			setIsLogged = true
			setIsDisconnected = false
		}

		if (response.status !== 200) {
			setIsLogged = false
			setIsDisconnected = true
		}
	})

	async function handleLogout() {
		await server.delete('logout')
		setIsLogged = false
		setIsDisconnected = true
	}
</script>

<header class="text-white body-font bg-indigo-500">
	<div
		class="container mx-auto flex flex-wrap pt-3 pb-2 px-8 flex-col md:flex-row justify-center items-center"
	>
		<a
			href="/"
			use:link
			class="flex flex-wrap text-medium items-center text-gray-900 mb-2 ml:mb-auto"
		>
			<span class="text-xl text-white">Svelte Login App</span>
		</a>
		<nav
			class="md:ml-auto flex flex-wrap items-center text-base justify-center"
		>
			<!-- <a href="/login" use:link class="mr-5 hover:text-gray-900">Login</a>
			<a href="/register" use:link class="mr-5 hover:text-gray-900">Register</a> -->
			{#if setIsDisconnected === true}
				<a href="/signin" use:link class="mr-5 hover:text-gray-900">Signin</a>
				<a href="/signup" use:link class="mr-5 hover:text-gray-900">Sign up</a>
			{:else if setIsLogged === true}
				<p class="mr-5">{info.data.email}</p>
				<a
					href="/signin"
					on:click={handleLogout}
					use:link
					class="mr-5 hover:text-gray-900">Logout</a
				>
				<!-- <a href="/signup" use:link class="mr-5 hover:text-gray-900">Sign up</a> -->
			{/if}
		</nav>
	</div>
</header>
