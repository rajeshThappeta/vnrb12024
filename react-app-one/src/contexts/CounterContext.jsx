//create context obj
import { createContext, useState } from "react";
export const counterContextObj = createContext();

function CounterContext({ children }) {
  //state
  const [counter, setCounter] = useState(100);

  return (
    <counterContextObj.Provider value={{ counter, setCounter }}>
      {children}
    </counterContextObj.Provider>
  );
}

export default CounterContext;
