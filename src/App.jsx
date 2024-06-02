
import './App.css'
// import MyComponent from './components/my-component'
// import Counter from './components/count'
// import Login from './components/login'
// import Child from './components/child'
// import { useState } from 'react'

import DataDisplay from './components/HOC/DataDisplay'
import withLoading from './components/HOC/WithLoading'

const DataDisplayWithLoading = withLoading(DataDisplay)

// import DataDisplay2 from './components/DataDisplay2'

// import Counter from './components/use-reducer/counter'

function App() {
  // const [name, setName] = useState('test')

  // const printEmail = (email) => {
  //   console.log("email", email)
  // }

  return (
    <>
      {/* <MyComponent name="Roy" age={12}/>
      <MyComponent name="John" age={13} address="pasig city"/> */}
      {/* <Counter /> */}
      {/* <Child name={name} printEmail={printEmail}/> */}

      <DataDisplayWithLoading />

      {/* <DataDisplay2 />  */}

      {/* <Counter /> */}
    </>
  )
}

export default App
