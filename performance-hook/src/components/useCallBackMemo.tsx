// Example 1: Without useCallback()

import { useState } from "react";
import Child from "./Child";
function Parent() {
    const [count, setCount] = useState<number>(0);
    const handleClick = () => {
        console.log("Button Clicked");
    };
    return (
        <div>
            <h2>Count: {count}</h2>
            <button onClick={()=> setCount(count + 1)}>
                Increase
            </button>
            <Child onClick={handleClick}/>
        </div>
    );
}
export default Parent;


// Example 2: useCallback() with React.memo()
// To understand the real benefit of useCallback(), we should combine it with React.memo().
// React.memo() allows React to skip rendering a child component when its props are unchanged.


// import { useCallback, useState, memo } from "react";
// interface ChildProps {
//   onClick: () => void;
// }
// const Child = memo(function Child({ onClick }: ChildProps) {
//   console.log("Child rendered");
//   return (
//     <button onClick={onClick}>
//       Child Button
//     </button>
//   );
// });
// function Parent() {
//   const [count, setCount] = useState<number>(0);
//   const handleClick = useCallback(() => {
//     console.log("Child button clicked");
//   }, []);
//   return (
//     <div>
//       <h2>Count: {count}</h2>
//       <button onClick={() => setCount(count + 1)}>
//         Increase Counter
//       </button>
//       <Child onClick={handleClick} />
//     </div>
//   );
// }

// export default Parent;


// useCallback() alone does not prevent a child from rendering. 
// Combining it with React.memo() makes it useful for avoiding renders 
// caused by unchanged function props.
