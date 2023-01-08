import { writable, derived } from 'svelte/store'

export const token = writable(localStorage.getItem('token'))
export let greeting = writable('Welcome, sign in to your account')
// export let user = writable('sign in to your account')
// export let greeting = derived(
// 	user,
// 	$user => `Hello ${$user}!`
// )
export let message = writable('You are not logged in')
export let success = writable(false)
export let failure = writable(true)
export let isLogged = writable(true)
export let IsDisconnected = writable(true)
