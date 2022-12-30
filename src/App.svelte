<script lang="ts">
	import '../public/global.css'
	import Login from './Login.svelte'
	import Register from './Register.svelte'
	import Home from './Home.svelte'
	import Router, { link } from 'svelte-spa-router'
	import Signin from './Signin.svelte'
	import Signup from './Signup.svelte'

	const routes = {
		'/': Home,
		'/login': Login,
		'/register': Register,
		'/signin': Signin,
		'/signup': Signup,
	}
</script>

<!-- BOOTSTRAP  -->
<!-- <header class="p-3 bg-dark text-white">
  <div class="container">
    <div class="d-flex flex-wrap align-item-center justify-content-center justify-content-lg-start">
      <ul class="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
        <li>
          <a href="/" use:link class="nav-link px-2 text-white">Home</a>
        </li>
      </ul>

      <div class="text-end">
        <a href="/login" use:link class="btn btn-outline-light me-2">Login</a>
        <a href="/register" use:link class="btn btn-outline-light me-2">Register</a>
      </div>
    </div>
  </div>
</header> -->

<!-- TAILWIND -->
<header class="text-white body-font bg-indigo-500">
	<div
		class="container mx-auto flex flex-wrap pt-3 pb-2 flex-col md:flex-row items-center"
	>
		<a
			href="/"
			use:link
			class="flex flex-wrap text-medium items-center text-gray-900 mb-2 ml:mb-auto"
		>
			<span class="ml-3 text-xl text-white">Tailblocks</span>
		</a>

		<nav
			class="md:ml-auto mb-2 flex flex-wrap items-center text-base justify-center"
		>
			<!-- <a href="/login" use:link class="mr-5 hover:text-gray-900">Login</a>
			<a href="/register" use:link class="mr-5 hover:text-gray-900">Register</a> -->
			<a href="/signin" use:link class="mr-5 hover:text-gray-900">Sign in</a>
			<a href="/signup" use:link class="mr-5 hover:text-gray-900">Sign up</a>
		</nav>
	</div>
</header>

<Router {routes} />
