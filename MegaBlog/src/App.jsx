import { useEffect, useState } from 'react'
import './app.css'
import {useDispatch} from 'react-redux'
import authService from './appwrite/auth'
import {Header, Footer} from './components/index'
import { login, logout } from './store/authStore'

function App() {
  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch()

  useEffect(() => {
    authService.getCurrentUser()
    .then((userData) => {
      if (userData) {
        dispatch(login({userData}))
      }else{
        dispatch(logout())
      }
    })
    .catch((err) => console.log(err))
    .finally(() => setLoading(false))
  }, [])

  return (
    <>
      {
        loading ? null: 
        <div className='min-h-screen flex flex-wrap content-between bg-gray-400'>
          <div className='w-fill block'>
            <Header />
            <main>
              <h1>hi</h1>
              {/* <Outlet /> */}
            </main>
            <Footer />
          </div>
        </div>
      }
    </>
  )
}

export default App
