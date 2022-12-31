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

<section class="text-gray-600 body-font relative">
	<div class="container px-5 py-24 mx-auto">
		<div class="flex flex-col text-center w-full mb-12">
			<h1
				class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900"
			>
				Please Register
			</h1>
			<p class="lg:w-2/3 mx-auto leading-relaxed text-base">
				Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
				gentrify.
			</p>
		</div>
		<div class="lg:w-1/2 md:w-2/3 mx-auto">
			<div class="flex flex-wrap -m-2">
				<div class="p-2 w-1/2">
					<div class="relative">
						<label for="name" class="leading-7 text-sm text-gray-600"
							>Name</label
						>
						<input
							type="text"
							id="name"
							name="name"
							class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
						/>
					</div>
				</div>
				<div class="p-2 w-1/2">
					<div class="relative">
						<label for="email" class="leading-7 text-sm text-gray-600"
							>Email</label
						>
						<input
							type="email"
							id="email"
							name="email"
							class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
						/>
					</div>
				</div>
				<div class="p-2 w-1/2">
					<div class="relative">
						<label for="email" class="leading-7 text-sm text-gray-600"
							>Email</label
						>
						<input
							type="email"
							id="email"
							name="email"
							class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
						/>
					</div>
				</div>
				<div class="p-2 w-1/2">
					<div class="relative">
						<label for="email" class="leading-7 text-sm text-gray-600"
							>Email</label
						>
						<input
							type="email"
							id="email"
							name="email"
							class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
						/>
					</div>
				</div>
				<div class="p-2 w-full">
					<button
						class="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"
						>Button</button
					>
				</div>
				<div class="p-2 w-full pt-8 mt-8 border-t border-gray-200 text-center">
					<a href="/" class="text-indigo-500">example@email.com</a>
					<p class="leading-normal my-5">
						49 Smith St.
						<br />Saint Cloud, MN 56301
					</p>
					<span class="inline-flex">
						<a href="/" class="text-gray-500">
							<svg
								fill="currentColor"
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								class="w-5 h-5"
								viewBox="0 0 24 24"
							>
								<path
									d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"
								/>
							</svg>
						</a>
						<a href="/" class="ml-4 text-gray-500">
							<svg
								fill="currentColor"
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								class="w-5 h-5"
								viewBox="0 0 24 24"
							>
								<path
									d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"
								/>
							</svg>
						</a>
						<a href="/" class="ml-4 text-gray-500">
							<svg
								fill="none"
								stroke="currentColor"
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								class="w-5 h-5"
								viewBox="0 0 24 24"
							>
								<rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
								<path
									d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"
								/>
							</svg>
						</a>
						<a href="/" class="ml-4 text-gray-500">
							<svg
								fill="currentColor"
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								class="w-5 h-5"
								viewBox="0 0 24 24"
							>
								<path
									d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"
								/>
							</svg>
						</a>
					</span>
				</div>
			</div>
		</div>
	</div>
</section>

<section class="text-gray-600 body-font relative">
	<div class="absolute inset-0 bg-gray-300">
		<iframe
			width="100%"
			height="100%"
			frameborder="0"
			marginheight="0"
			marginwidth="0"
			title="map"
			scrolling="no"
			src="https://maps.google.com/maps?width=100%&amp;height=600&amp;hl=en&amp;q=%C4%B0zmir+(My%20Business%20Name)&amp;ie=UTF8&amp;t=&amp;z=14&amp;iwloc=B&amp;output=embed"
			style="filter: grayscale(1) contrast(1.2) opacity(0.4);"
		/>
	</div>
	<div class="container px-5 py-24 mx-auto flex">
		<div
			class="lg:w-1/3 md:w-1/2 bg-white rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-md"
		>
			<h2 class="text-gray-900 text-lg mb-1 font-medium title-font">
				Feedback
			</h2>
			<p class="leading-relaxed mb-5 text-gray-600">
				Post-ironic portland shabby chic echo park, banjo fashion axe
			</p>
			<div class="relative mb-4">
				<label for="email" class="leading-7 text-sm text-gray-600">Email</label>
				<input
					type="email"
					id="email"
					name="email"
					class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
				/>
			</div>

			<div class="relative mb-4">
				<label for="email" class="leading-7 text-sm text-gray-600">Email</label>
				<input
					type="email"
					id="email"
					name="email"
					class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
				/>
			</div>

			<div class="relative mb-4">
				<label for="email" class="leading-7 text-sm text-gray-600">Email</label>
				<input
					type="email"
					id="email"
					name="email"
					class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
				/>
			</div>

			<div class="relative mb-4">
				<label for="email" class="leading-7 text-sm text-gray-600">Email</label>
				<input
					type="email"
					id="email"
					name="email"
					class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
				/>
			</div>

			<button
				class="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
				>Button</button
			>
			<p class="text-xs text-gray-500 mt-3">
				Chicharrones blog helvetica normcore iceland tousled brook viral
				artisan.
			</p>
		</div>
	</div>
</section>
