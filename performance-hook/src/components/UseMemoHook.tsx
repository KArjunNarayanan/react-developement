// What is performance optimization?
// Performance optimization means improving the speed and efficiency of a React application
//  by reducing unnecessary calculations and component re-rendering.


// React provides performance optimization tools:
// Hook / Feature	 Purpose
// useMemo()	     Memorizes a calculated value
// useCallback()	 Memorizes a function reference
// React.memo()	     Prevents unnecessary child component rendering when props are unchanged

// What is re-rendering?
// Re-rendering means React executes a component function again to calculate what should appear on the screen.

// A component can re-render when:
// - Its state changes.
// - Its props change.
// - Its parent component re-renders.
// - Its consumed context value changes.


// useMemo() Hook
// useMemo() is a React hook used to memorize the result of an expensive calculation.
// It stores the calculated value and reuses it during subsequent 
// renders if its dependencies have not changed.

// Syntax:
// const memorizedValue = useMemo(() => {
//   return calculation;
// }, [dependencies]);

// useMemo()	    React performance hook
// () =>	        Callback function
// return	        Returns the calculated value
// [dependencies]	Values that determine when recalculation happens


// We can use useMemo() to avoid recalculating the filtered list when unrelated state changes.

// Without useMemo()
// import { useState } from "react";
// const useMemoHook = () => {
//     const [count, setCount] = useState<number>(0);
//     const students = [80, 45, 90, 35, 75, 95];
//     const passedStudents = students.filter(
//         (mark) => mark >= 50
//     );
//     console.log("Filtering students...");
//     return (
//         <div>
//             <h2>Passed Students</h2>
//             {passedStudents.map((mark, index) => (
//                 <p key={index}>
//                     {mark}
//                 </p>
//             ))}
//             <h3>Counter: {count}</h3>
//             <button onClick={() => setCount(count + 1)}>
//                 Increase Counter
//             </button>
//         </div>
//     )
// }
// export default useMemoHook;


// The filtering operation also executes again, event though student marks have not changed.

// Example 2: With useMemo()


// import { useState, useMemo } from "react";
// const useMemoHook = () => {
//     const [count, setCount] = useState<number>(0);
//     const students = [80, 45, 90, 35, 75, 95];
//     const passedStudents = useMemo(() => {
//         console.log("Filtering students...");
//         return students.filter((mark) => mark >= 50);
//     },[students]);
//     return (
//         <div>
//             <h2>Passed Students</h2>
//             {passedStudents.map((mark, index) => (
//                 <p key={index}>
//                     {mark}
//                 </p>
//             ))}
//             <h3>Counter: {count}</h3>
//             <button onClick={() => setCount(count + 1)}>
//                 Increase Counter
//             </button>
//         </div>
//     )
// }
// export default useMemoHook;



import { useState, useMemo } from "react";
const students = [80, 45, 90, 35, 75, 95];
const useMemoHook = () => {
    const [count, setCount] = useState<number>(0);
    const passedStudents = useMemo(() => {
        console.log("Filtering students...");
        return students.filter((mark) => mark >= 50);
    },[]);
    return (
        <div>
            <h2>Passed Students</h2>
            {passedStudents.map((mark, index) => (
                <p key={index}>
                    {mark}
                </p>
            ))}
            <h3>Counter: {count}</h3>
            <button onClick={() => setCount(count + 1)}>
                Increase Counter
            </button>
        </div>
    )
}
export default useMemoHook;

