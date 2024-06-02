import {useEffect, useState} from 'react'
import axios from 'axios';

export default function ComponentWithUseEffect() {
  const [count, setCount] = useState(0)

  
  useEffect(()=>{
    console.log('use Effect')
    axios.get('http://localhost:3001/users')
      .then(function (response) {
        // handle success
        console.log(response);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
  }, []) // empty array - run once

  // handleClick = () =>{
  //   setCount(count +1 )
  // }

  return (
    <div>

      <button onClick={()=>setCount(count + 1)}>increment</button>
      <div>{count}</div>
    </div>
  )
}
