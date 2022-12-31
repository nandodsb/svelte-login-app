<script lang="ts">
	import api from './api'
	import axios from 'axios'
	import { push } from 'svelte-spa-router'
	import { writable } from 'svelte/store'
	import { register } from './router'

	let session = writable({ data: '' })

	let name = '',
		username = '',
		email = '',
		password = ''

	let combined

	$: combined = {
		name: name,
		email: email,
		username: username,
		password: password,
	}

	let data
	$: if (data) {
		$session.data = data
	}

	// interface ICombined {
	//     name: string,
	//     email: string,
	//     username: string,
	//     password: string,
	// }

	$: handleRegister = async () => {
		console.log(register)
		let response = await fetch(register, {
			method: 'POST',
			mode: 'cors',
			credentials: 'include',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(combined),
		})

		const info = await response.json()
		console.log(info)

		console.log('Response =>', info.data)

		await push('/login')
	}
</script>

<main class="mb-3 mt-5 form-signin container">
	<form on:submit|preventDefault={handleRegister}>
		<h1 class="h3 mb-3 fw-normal">Please register</h1>

		<div class="mb-3 form-floating">
			<input
				bind:value={name}
				type="text"
				class="form-control"
				placeholder="Name"
			/>
			<label for="">Name</label>
		</div>

		<div class="mb-3 form-floating">
			<input
				bind:value={email}
				type="email"
				class="form-control"
				placeholder="Email"
			/>
			<label for="">Email</label>
		</div>

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
				bind:value={password}
				type="password"
				class="form-control"
				placeholder="Password"
			/>
			<label for="">Password</label>
		</div>

		<button class="w-100 btn btn-lg btn-primary" type="submit">Submit</button>
	</form>
</main>
