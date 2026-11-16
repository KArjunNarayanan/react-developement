import { useState } from "react";
 
const useLocalStorage = <T>(key: string,initialValue: T) => {
  const [value, setValue] = useState<T>(() => {
    const storedValue = localStorage.getItem(key);
    if (storedValue !== null) {
      return JSON.parse(storedValue) as T;
    }
    return initialValue;
  });
  const updateValue = (newValue: T) => {
    setValue(newValue);
    localStorage.setItem(key,JSON.stringify(newValue));
  };
  return [value, updateValue] as const;

//   Without as const, TypeScript may infer the returned array as an array containing a union of the two element types.
// With as const, TypeScript treats it as a fixed tuple.
}
export default useLocalStorage;





// Explanation
// 1. key – Name used to store data.
// 2. initialValue – Default value when no saved data exists.
// 3. useState() – Maintains React state.
// 4. localStorage.getItem() – Checks whether data already exists.
// 5. JSON.parse() – Converts stored JSON string into a value.
// 6. JSON.stringify() – Converts JavaScript data into a string.
// 7. updateValue() – Updates React state and LocalStorage.
// 8. as const – Makes TypeScript treat the returned value as a fixed tuple.
// Step 2: Create Username.tsx
// File: src/components/Username.tsx
// import useLocalStorage from "../hooks/useLocalStorage";