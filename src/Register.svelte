<script lang="ts">
	import { push } from 'svelte-spa-router'
	import { server } from './api'
	import type { IUser } from './interfaces'

	let name = '',
		username = '',
		email = '',
		password = ''

	let form_data = {}

	$: form_data = {
		name: name,
		email: email,
		username: username,
		password: password,
	}

	async function handleRegister() {
		try {
			await server.post('register', form_data).then((response) => {
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
