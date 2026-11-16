// What is Hook?
// Hooks are special functions provided by React that allow functional componenets to use React features such as:
// // - State management
// // - Side effects
// // - Context
// // - References
// // - Performance optimization

// What is Custom Hook?
// A custom Hook is a Javascript or Typescript function that allows us to reuse stateful logic between multiple React components.

// // Instead of writing the same logic repeatedly in different components, 
// we can create a custom hook and reuse it.

// // Rules for Custom Hooks
// // 1. Custom Hook names must start with use.
// // 2. Custom Hooks can use other React Hooks.
// // 3. Call Custom Hooks only at the top level of React components or other Custom Hooks.
// // 4. Custom Hooks help reuse logic, not UI.

import { useEffect, useState } from "react";

const useFetch = <T>(url: string) => {
    const [data, setData] = useState<T | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(()=>{
        const fetchData = async () => {
            try{
                setLoading(true);
                setError(null);
                const response = await fetch(url);
                if(!response.ok){
                    throw new Error("Something went wrong");
                }
                const result: T = await response.json();
                setData(result);
            } catch(err){
                setError(err instanceof Error ? err.message : "Unknown error");
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, [url]);
    return {data, loading, error};
}
export default useFetch;