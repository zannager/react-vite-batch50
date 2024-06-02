import Child4 from "./Child4"
import UserContext from "./UserContext"
import { useContext } from "react"

export default function Child3() {

  const {user} = useContext(UserContext)
  return (
    <div>
      <Child4 />
      <div>this is child 3: {user}</div>
    </div>
  )
}
