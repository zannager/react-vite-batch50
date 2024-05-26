import { useState } from "react";
const Counter = () => {
    const [count, setCount] = useState(0)
    
    const handleClick = () => setCount(count + 1)
    // const styles = {
    //     backgroundColor: 'red'
    // }
    return ( 
        <div> 
            {/* <p className="test">count: {count}</p> */}
            {/* <p style={{backgroundColor: "green"}}>count: {count}</p> */}
            <button onClick={handleClick}>Click</button>
        </div>
     );
}
 
export default Counter;