<script lang="ts">
	import '../public/global.css'
	import Login from './Login.svelte'
	import Register from './Register.svelte'
	import Home from './Home.svelte'
	import Router from 'svelte-spa-router'
	import Signin from './Signin.svelte'
	import Signup from './Signup.svelte'
	import Header from './Header.svelte'

	const routes = {
		'/': Home,
		'/login': Login,
		'/register': Register,
		'/signin': Signin,
		'/signup': Signup,
	}
</script>

<Header />
<Router {routes} />
