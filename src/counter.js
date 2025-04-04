import "./counter.css"
import { useState } from "react";



function Counter()
{
    const [count, setcount] = useState(0)
   
    const handleInc=()=>
    {
        setcount(count+1)
    }
    const handleDec=()=>
    {
        setcount(count-1)
    }
    const handleReset=()=>
    {
        setcount(0)
    }

    return(
        <div className = "main-cont">
            <h1>Counter</h1>
            <div className = "count-cont">
                <span>{count}</span>
            </div>
            <div className = "button-cont">
                <button className ="button inc" onClick = {handleInc}>Increase</button>
                <button className = "button res" onClick={handleReset}>Reset</button>
                <button className = "button dec" onClick = {handleDec}>Decrease</button>
            </div>
        </div>
    )
}
export default Counter
