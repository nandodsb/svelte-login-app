<script lang="ts">
	import api from './api'
	import axios from 'axios'
	import { push } from 'svelte-spa-router'
	import { writable } from 'svelte/store'
	import { login } from './router'

	let session = writable({ data: '' })

	let phrase = '',
		message = ''
	let username = '',
		password = ''
	let combined, success
	let data
	$: combined = { username: username, password: password }

	$: if (data) {
		$session.data = data
	}

	$: handleLogin = async () => {
		console.log(login)
		let response = await fetch(login, {
			method: 'POST',
			mode: 'cors',
			credentials: 'include',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(combined),
		})

		const data = await response.json()
		console.log(data)

		console.log('Response Login =>', response)
		console.log('Response data =>', combined)
		await push('/')
	}
</script>

<main class="mb-3 mt-5 form-signin container">
	<form class="container" on:submit|preventDefault={handleLogin}>
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
