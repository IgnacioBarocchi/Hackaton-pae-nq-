import "./App.css";
import "./style.css";
import "./fonts.css";
import React, { useEffect, createContext, useReducer, useContext } from "react";
import Nav from "./components/Nav";
import Main from "./components/Main";

import { dataBaseReducer, initialState } from "./reducer/dataBaseReducer";
import { COLLECTION_OF_IDEAS_FROM_HACKATHON_PAE } from "./data/COLLECTION_OF_IDEAS_FROM_HACKATHON_PAE";
import { sortByLikes } from "./helpers/dbSorters";
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
          JSON.stringify(COLLECTION_OF_IDEAS_FROM_HACKATHON_PAE),
        );
  });
  return <></>;
};

function App():any {
  const [state, dispatch] = useReducer(dataBaseReducer, initialState);
  return (
    <DataBaseContext.Provider value={{ state, dispatch }}>
      <Data />
      <Nav db={COLLECTION_OF_IDEAS_FROM_HACKATHON_PAE} />
      <Main db={sortByLikes(COLLECTION_OF_IDEAS_FROM_HACKATHON_PAE)} />
    </DataBaseContext.Provider>
  );
}

export default App;
