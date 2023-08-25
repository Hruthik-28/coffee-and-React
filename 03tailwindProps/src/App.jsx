
import './App.css'
import Card from './components/card'

function App() {
  let myObj = {
    username: "Hruthik",
    age: 19
  }

  return (
    <>
    <h1 className='bg-green-400 text-black rounded p-3 mb-4' >Tailwind test</h1>
    <Card channel="chai aur code" username = {myObj.username} btnText = "visit me"/>
    <Card channel="Hruthik" />

    </>
  )
}

export default App
