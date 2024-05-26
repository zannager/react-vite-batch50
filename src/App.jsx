
import './App.css'
// import MyComponent from './components/my-component'
// import Counter from './components/count'
// import Login from './components/login'
import Child from './components/child'
import { useState } from 'react'

function App() {
  const [name, setName] = useState('test')

  const printEmail = (email) => {
    console.log("email", email)
  }

  return (
    <>
      {/* <MyComponent name="Roy" age={12}/>
      <MyComponent name="John" age={13} address="pasig city"/> */}
      {/* <Counter /> */}
      <Child name={name} printEmail={printEmail}/>
    </>
  )
}

export default App
