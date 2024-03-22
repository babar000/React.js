import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

const anotherElement=(
  <a href='https://www.google.com/' target="_blank">Vist google</a>
)
const reactElement = React.createElement(
  'a',
  {href: 'https://www.google.com/',target:'_blank'},
  'Click me to visit google'
)
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
   {/* reactElement */}
  </React.StrictMode>,
)
