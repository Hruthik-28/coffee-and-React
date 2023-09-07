import { useCallback, useEffect, useRef, useState } from 'react'

function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState()
  
  // useref hook
  const passwordRef = useRef(null)

  // useCallback => dependencies given are changing then optimize the given method
  const passwordGenerator =   useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if (numberAllowed) str += "0123456789"
    if (charAllowed) str += "!@#$%^&*()_+~{}-|/<>,.`"

    for (let i = 0; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
    }

    setPassword(pass)
  }, [length, numberAllowed, charAllowed, setPassword])

  const copyPasswordToClipBoard = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 100)
    window.navigator.clipboard.writeText(password)
  }, [password])

  // useEffect => dependencies me change hui run the given method again
  useEffect(() => {
    passwordGenerator()
  }, [length, numberAllowed, charAllowed, passwordGenerator])


  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg p-3 my-40 text-white bg-gray-700'>
        <h1 className='text-center text-2xl mb-5 my-3'>Password Generator</h1>
        <div className='flex rounded-lg overflow-hidden mb-4 gap-2'>
          <input 
            type="text" 
            value={password}
            className='outline-none w-full py-1 px-3 rounded-lg text-black'
            placeholder='password'
            ref={passwordRef}
          />
         <button onClick={copyPasswordToClipBoard} className='bg-blue-400 rounded-lg px-5 py-2 hover:bg-blue-500'>copy</button>
          
        </div>
        <div className='flex text-sm gap-x-5'>
          <div className='flex items-center gap-x-1'>
            <input 
              type="range"
              min={8}
              max={50}
              value={length}
              className='cursor-pointer'
              onChange={(e) => {setLength(e.target.value)}}
            /> 
            <label>Length: {length}</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input 
              type="checkbox" 
              defaultChecked={numberAllowed}
              id='numberInput'
              onChange={() => setNumberAllowed((prev) => !prev)}
            />
            <label >Numbers</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input 
              type="checkbox"
              defaultChecked = {charAllowed}
              id='charInput'
              onChange={() => setCharAllowed((prev) => !prev)}
            />
            <label >characters</label>
          </div>
        </div>
      </div>

    </>
  )
}

export default App
