import { useState } from "react";

const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [isEmailValid, setisEmailValid] = useState(false)
    
    const handleSubmit = () => {
        // console.log('email', email)
        // console.log('password', password)
        
        if(!email){
            console.log('email is required!')
        }
        if(!password){
            console.log('password is required!')
        }

        if(email && password){
            if(email === "admin@gmail.com" && password === "password"){
                console.log('logged in!')
            }else {
                console.log('incorrect credentials')
            }
        }
    }
    const clear = () => {
        setEmail("")
        setPassword("")
        console.log('clear')
    }

    // debounce
    const emailValidation = (e) => {
        setEmail(e.target.value)
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        setisEmailValid(emailRegex.test(email))
    }

    return ( 
        <>
            <input type="text" name="email"  value={email} onChange={emailValidation}/> 
            { !isEmailValid? <p style={{color: 'red'}}>email is not valid</p>:'' }
            <br/>
            <input type="password" name="password" value={password} onChange={e=>setPassword(e.target.value)} /> <br/>
            <button onClick={handleSubmit}>submit</button>
            <button onClick={clear}>clear</button>
        </>
     );
}
 
export default Login;