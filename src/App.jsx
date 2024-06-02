
import './App.css'
// import MyComponent from './components/my-component'
// import Counter from './components/count'
// import Login from './components/login'
// import Child from './components/child'
// import { useState } from 'react'

// import DataDisplay from './components/HOC/DataDisplay'
// import withLoading from './components/HOC/WithLoading'

// import ComponentWithUseEffect from './components/use-effect/component-use-effect'

// const DataDisplayWithLoading = withLoading(DataDisplay)

// import DataDisplay2 from './components/render-props/DataDisplay2'

// import Counter from './components/use-reducer/counter'
// import UpdateUser from './components/use-reducer/update-user'
import { useState } from 'react';
import ThemeContext from './components/context-api/ThemeContext'
import ThemedComponent from './components/context-api/ThemedComponent'


function App() {
  // const [name, setName] = useState('test')
  

  // const printEmail = (email) => {
  //   console.log("email", email)
  // }

  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <>
      {/* <MyComponent name="Roy" age={12}/>
      <MyComponent name="John" age={13} address="pasig city"/> */}
      {/* <Counter /> */}
      {/* <Child name={name} printEmail={printEmail}/> */}

      {/* <DataDisplayWithLoading /> */}

      {/* <DataDisplay2 />  */}

      {/* <Counter /> */}
      {/* <UpdateUser /> */}

      {/* <ComponentWithUseEffect /> */}

      <ThemeContext.Provider value={{ theme, toggleTheme }}>
        <div>
          <button onClick={toggleTheme}>Toggle Theme</button>
          <ThemedComponent />
        </div>
      </ThemeContext.Provider>
    </>
  )
}

export default App
