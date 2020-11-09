import "./App.css";
import "./style.css";
import "./fonts.css";
import React, { useEffect, createContext, useReducer, useContext } from "react";
import Nav from "./components/Nav";
import Main from "./components/Main";

import { dataBaseReducer, initialState } from "./reducer/dataBaseReducer";

//@ts-ignore
export const DataBaseContext: any = createContext();

const Data = () => {
  const { dispatch }:any = useContext(DataBaseContext);

  useEffect(() => {
    const data = localStorage.getItem("data");
    data
      ? dispatch({
          type: "SORTED_BY_TIME",
          payload: data,
        })
      : localStorage.setItem(
          "data",
          JSON.stringify(initialState),
        );
  });
  return <></>;
};

function App():any {
  const [state, dispatch] = useReducer(dataBaseReducer, initialState);
  return (
    <DataBaseContext.Provider value={{ state, dispatch }}>
      <Data />
      <Nav />
      <Main />
    </DataBaseContext.Provider>
  );
}

export default App;
