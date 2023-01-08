export { }

export interface IUser {
  name: string
  email: string
  username: string
  password: string
  form_data: {}
  handleRegister: () => void
  handleLogin: () => void
  handleLogout: () => void
  
}

export interface IStates {
  isLogged: boolean
  isDisconnected: boolean
  sucess: string
  message: string
  greeting: string
}

interface Greeting {
  message: string
  complement: string
}

function greet(greeting: Greeting) {
  return "Welcome, " + greeting.complement;
}