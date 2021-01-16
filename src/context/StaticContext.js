import * as React from "react";

const Context = React.createContext();

export const DinamicStateContext = ({ children }) => {
  const [state, setstate] = React.useState({ initialState: "hola" });
  return (
    <Context.Provider value={{ state, setstate }}>{children}</Context.Provider>
  );
};

export default Context;
