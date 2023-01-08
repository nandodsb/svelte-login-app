import { server } from '../api'

async function fetcher() {
  let fetching = await server.get('getme')

  return fetching
}

export { fetcher }