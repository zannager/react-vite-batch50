import UserContext from "./UserContext"
import { useContext, useState } from "react"

export default function Child5() {
  const {user, updateUser} = useContext(UserContext)
  const [newUser, setNewUser] = useState('')

  return (
    <div>
      <p>Child5</p>
      <input type="text" value={newUser} onChange={e=>setNewUser(e.target.value)}/>
      <button onClick={()=>{updateUser(newUser)}}>update user</button>
      <div>
        this is child 5: 
         {user}
      </div>
    </div>
  )
}
