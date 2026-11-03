import { useState,useEffect } from "react";

const PageTitle = () =>{
    const [count,setCount] = useState<number> (0);

    useEffect(()=>{                                               // use this for side effect 
        document.title =`Count:${count}`;                         // web page 
        console.log(count)
    },[count]); // [count] tells that this effect depends on the current count


    const handle = () =>{
        setCount((prev) =>prev -2)
    };
    const handle1 =() =>{ 
        setCount(0)
    };

    return(
        <div>
            <h2>page title</h2>
            <p>Count:{count}</p>
            <button onClick={handle}>Increment</button>
            <button onClick={handle1}>reset</button>

        </div>
    );
};
export default PageTitle;
    