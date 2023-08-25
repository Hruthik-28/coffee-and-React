import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

function MyAPP(){
  return (
    <div>
      <h1>Custom App !</h1>
    </div>
  )
}

// const ReactElement = {
//   type: 'a',
//   props: {
//       href: 'https://goggle.com',
//       target: '_blank'
//   },
//   children: 'Click me to visit google'
// }




const anotherUser = "chai aur react"

const ReactElement = React.createElement(
  'a',
  {href: 'https://google.com', target: '_blank'},
  'Click me to visit google'

)

ReactDOM.createRoot(document.getElementById('root')).render(
  <ReactElement />
)
