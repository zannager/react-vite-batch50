import {useReducer, useState} from 'react'
import { reducer, initialState } from './users';

export default function UpdateUser() {
    const [user, setUser] = useState('')
    const [state, dispatch] = useReducer(reducer, initialState);


  return (
    <div>
      <input type="text" value={user} onChange={e=>setUser(e.target.value)}/>
      <button onClick={() => dispatch({ type: 'add-user', data: {id: 4, name: user} })}>add user</button>
      <button onClick={() => dispatch({ type: 'remove-user', data: {name: user} })}>remove user</button>

      <br />
      <div>
        {
            state?.users.map((user)=>(
                <p key={user.id}>{user.name}</p>
            ))
        }
      </div>
    </div>
  )
}
