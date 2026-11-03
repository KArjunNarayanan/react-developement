// CLASS COMPONENTS

// import { Components } from "react";
// class Welcome extends Component {
//     render() {
//         return (
//             <div>
//                 <h1>Welcome to React!</h1>
//                 <p>This is s class component.</p>
//             </div>
//         );
//     }
// }
// export default Welcome;

// React Hooks are special functions that allow functional components to use React features such as state and side effects.

// 2. The useState Hook
// What is state?
// State is data that a component remembers between renders.

// For example, consider a counter application. When a user clicks the Increment button, the displayed number should change.
// We nedd a way to store the number and tell React to update the screen when it changes. This is what useState does.

// syntax
// import { useState } from "react";
// const [value, setValue] = useState<number>(0);

// What is useEffect ?

import { useState } from "react";
import { preconnect } from "react-dom";

const Counter = () => {
    const [count, setCount] = useState<number>(0);

    const handleIncrement = () => {
        setCount((previousCount) => previousCount + 1);
    };

    const handleDecrement = () => {
        setCount((previousCount) => previousCount - 1);
    };

    const handleReset = () => {
        setCount(0);
    };

    return (
        <div>
            <h2>Counter Application</h2>
            <h3>Count: {count}</h3>
            <button onClick={handleIncrement}>Increment</button>
            <button onClick={handleDecrement}>Decrement</button>
            <button onClick={handleReset}>Reset</button>
        </div>
    );
};
export default Counter;






