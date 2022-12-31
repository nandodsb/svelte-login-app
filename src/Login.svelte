<script lang="ts">
	import m from 'mithril'
	import { push } from 'svelte-spa-router'
	import { login } from './router'
	import { auth } from './stores.js'

	let session

	auth.subscribe((value) => {
		session = value
	})

	let username = '',
		password = ''
	let combined

	$: combined = { username: username, password: password }

	$: handleLogin = async () => {
		await m
			.request({
				method: 'POST',
				url: login,
				body: combined,
				withCredentials: true,
			})
			.then(() => {
				console.log(session)
				auth.set(true)
				console.log(session)
				if (session === true) {
					push('/register')
				}
			})

		console.log(combined)

		// console.log(login)
		// let response = await fetch(login, {
		// 	method: 'POST',
		// 	mode: 'cors',
		// 	credentials: 'include',
		// 	headers: {
		// 		'Content-Type': 'application/json',
		// 	},
		// 	body: JSON.stringify(combined),
		// })
		// await response.json()

		// await push('/')
	}
</script>

<main class="card mb-3 mt-5 form-signin container justify-center">
	<form class="container mb-8 mt-6" on:submit|preventDefault={handleLogin}>
		<h1 class="h3 mb-3 fw-normal">Please sign in</h1>

		<div class="mb-3 form-floating">
			<input
				bind:value={username}
				type="text"
				class="form-control"
				placeholder="Username"
			/>
			<label for="">Username</label>
		</div>

		<div class="mb-3 form-floating">
			<input
				id="loginPassword"
				bind:value={password}
				type="password"
				class="form-control"
				placeholder="Password"
			/>
			<label for="">Password</label>
		</div>

		<div class="mb-3 form-check">
			<input type="checkbox" class="form-check-input" id="exampleCheck1" />
			<label class="form-check-label" for="exampleCheck1">Check me out</label>
		</div>

		<button class="w-100 btn btn-lg btn-primary" type="submit">Submit</button>
	</form>
</main>
