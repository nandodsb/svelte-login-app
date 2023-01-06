<script lang="ts">
	import '../public/global.css'
	import Login from './Login.svelte'
	import Register from './Register.svelte'
	import Home from './Home.svelte'
	import Router, { link, push } from 'svelte-spa-router'
	import Signin from './Signin.svelte'
	import Signup from './Signup.svelte'
	import { greeting, isLogged, message, success } from './stores'
	import { server } from './api'
	import { fetcher } from './fetcher.ts'
	import { onDestroy } from 'svelte'
	import Header from './Header.svelte'

	const routes = {
		'/': Home,
		'/login': Login,
		'/register': Register,
		'/signin': Signin,
		'/signup': Signup,
	}

	// let setGreeting, setIsLogged, setMessage, setSuccess, setToken
	// let info

	// greeting.subscribe((value) => {
	// 	setGreeting = value
	// })

	// let unsubscribe = isLogged.subscribe((value) => {
	// 	setIsLogged = value
	// })

	// onDestroy(unsubscribe)

	// message.subscribe((value) => {
	// 	setMessage = value
	// })

	// success.subscribe((value) => {
	// 	setSuccess = value
	// })

	// fetcher().then((response) => {
	// 	info = response.data
	// 	setIsLogged = true
	// })

	// $: handleLogout = () => {
	// 	server.delete('logout')
	// 	setIsLogged = false
	// 	setSuccess = false
	// 	onDestroy(unsubscribe)
	// }
</script>

<!-- TAILWIND -->
<!-- <header class="text-white body-font bg-indigo-500">
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
			class="md:ml-auto mb-2 flex flex-wrap items-center text-base justify-center"
		>
			<!-- <a href="/login" use:link class="mr-5 hover:text-gray-900">Login</a>
			<a href="/register" use:link class="mr-5 hover:text-gray-900">Register</a> -->
<!-- {#if setIsLogged === false}
				<a href="/signin" use:link class="mr-5 hover:text-gray-900">Sign in</a>
				<a href="/signup" use:link class="mr-5 hover:text-gray-900">Sign up</a>
			{:else if setIsLogged === true}
				<p class="mr-5">{info.data.email}</p>
				<a
					href="/signin"
					use:link
					on:click={handleLogout}
					use:link
					class="mr-5 hover:text-gray-900">Logout</a
				>
			{/if}
		</nav>
	</div>
</header> -->

<Header />
<Router {routes} />
