import { server } from '../api'
import { greeting, isLogged, message, success, token } from '../stores'

let setGreeting, setIsLogged, setMessage, setSuccess, setToken

isLogged.subscribe((value) => {
  setIsLogged = value
})

message.subscribe((value) => {
  setMessage = value
})

success.subscribe((value) => {
  setSuccess = value
})

async function fetcher() {
  let fetching = await server.get('getme')
  setSuccess = true
  setIsLogged = true
  return fetching
}

export { fetcher }