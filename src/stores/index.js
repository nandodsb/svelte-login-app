import { writable, derived } from 'svelte/store'

export let auth = writable(false)
export let greeting = writable('Welcome, sign in to your account')
// export let user = writable('sign in to your account')
// export let greeting = derived(
// 	user,
// 	$user => `Hello ${$user}!`
// )
export let message = writable('You are not logged in')
export let success = writable(true)
export let failure = writable(true)
export let isLogged = writable(true)
export let IsDisconnected = writable(true)
export let isToastNeeded = writable(true)
