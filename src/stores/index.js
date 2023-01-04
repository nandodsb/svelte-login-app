import { writable } from 'svelte/store'

export let auth = writable(false)
export let greeting = writable('Welcome, sign in to your account')
export let message = writable('You are not logged in')
export let success = writable(false)
export let isLogged = writable(false)
export let token = writable('_phoenix_react_chat_key')
// export const token = writable(localStorage.getItem('token'))
// export const token = writable(document.cookie('_phoenix_react_chat_key'))
