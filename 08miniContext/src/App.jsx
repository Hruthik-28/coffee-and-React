import './App.css'
import UserContextProvider from './Context/userContextProvider'
import Login from './components/Login'
import Profile from './components/Profile'
function App() {

  return (
    <UserContextProvider>
      <h1>Chai aur React</h1>
      <Login />
      <Profile />
    </UserContextProvider>
  )
}

export default App
