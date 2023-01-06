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

	onDestroy(() => {
		fetcher().then((response) => {
			info = response.data
			console.log(info.data)
		})
	})

	async function handleLogout() {
		await server.delete('logout')
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
			class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				stroke="currentColor"
				stroke-linecap="round"
				stroke-linejoin="round"
				stroke-width="2"
				class="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
				viewBox="0 0 24 24"
			>
				<path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
			</svg>
			<span class="ml-3 text-xl">Tailblocks</span>
		</a>
		<nav
			class="md:ml-auto flex flex-wrap items-center text-base justify-center"
		>
			<!-- <a href="/login" use:link class="mr-5 hover:text-gray-900">Login</a>
			<a href="/register" use:link class="mr-5 hover:text-gray-900">Register</a> -->
			{#if setIsDisconnected === true}
				<a href="/signin" use:link class="mr-5 hover:text-gray-900">Signin</a>
				<a href="/signup" use:link class="mr-5 hover:text-gray-900">Sign up</a>
			{:else}
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
