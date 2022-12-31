<script lang="ts">
	import { push } from 'svelte-spa-router'
	import { register } from './router'

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

		await push('/signin')
	}
</script>

<section class="text-gray-600 body-font">
	<div class="container px-5 py-12 mx-auto flex flex-wrap items-start">
		<div class="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0 mt-10">
			<h1 class="title-font font-medium text-3xl text-gray-900">
				Slow-carb next level shoindcgoitch ethical authentic, poko scenester
			</h1>
			<p class="leading-relaxed mt-4">
				Poke slow-carb mixtape knausgaard, typewriter street art gentrify
				hammock starladder roathse. Craies vegan tousled etsy austin.
			</p>
		</div>

		<form
			on:submit|preventDefault={handleRegister}
			class="lg:w-2/6 md:w-1/2 bg-gray-100 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0"
		>
			<h2 class="text-gray-900 text-lg text-center font-medium title-font mb-2">
				Sign Up
			</h2>

			<div class="relative mb-4">
				<label for="name" class="leading-7 text-sm text-gray-600">Name</label>
				<input
					bind:value={name}
					type="text"
					id="name"
					name="name"
					class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
				/>
			</div>

			<div class="relative mb-4">
				<label for="email" class="leading-7 text-sm text-gray-600">Email</label>
				<input
					bind:value={email}
					type="email"
					id="email"
					name="email"
					class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
				/>
			</div>

			<div class="relative mb-4">
				<label for="username" class="leading-7 text-sm text-gray-600"
					>Username</label
				>
				<input
					bind:value={username}
					type="text"
					id="username"
					name="username"
					class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
				/>
			</div>

			<div class="relative mb-4">
				<label for="password" class="leading-7 text-sm text-gray-600"
					>Password</label
				>
				<input
					bind:value={password}
					type="password"
					id="password"
					name="password"
					class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
				/>
			</div>

			<button
				type="submit"
				class="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"
				>Register</button
			>
		</form>
	</div>
</section>
