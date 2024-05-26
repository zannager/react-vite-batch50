import { useState } from "react";

const GrandChild = (props) => {
    const [email, setEmail] = useState("")
    
    const handleChange = (e) => {
        setEmail(e.target.value)
    }
    const submit = () => {
        props.printEmail(email)
    }

    return ( 
        <>
            <h1>{props?.name}</h1>
            <input type="text" name="email" value={email} onChange={handleChange} />
            <button onClick={submit}>submit</button>
        </>
     );
}
 
export default GrandChild;