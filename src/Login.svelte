<script lang="ts">
	import { push } from 'svelte-spa-router'
	import { server } from './api'
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
		try {
			await server.post('login', combined).then((response) => {
				console.log('Response => ', response)
				if (response.status === 200) {
					console.log('Status => ', response.status)
				} else {
				}
			})
		} catch (error) {
			console.log(error)
			console.log(error.response.data)
			console.log(error.response.status)
		}
		await push('/')
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
