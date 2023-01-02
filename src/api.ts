import axios from 'axios'

const server = axios.create({
    baseURL: 'http://localhost:4000/api/auth/',
})

server.defaults.withCredentials = true
axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
export { server }