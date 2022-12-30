import { routes } from "./routes"

export const fetcher = async (url: string) => {
  const response = await fetch('http://localhost:4000/api/auth/getme', {
    method: "GET",
    mode: 'cors',
    cache: 'no-cache',
    credentials: 'include',
  })
  const data = await response.json()
  return data
}