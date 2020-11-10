import './style/App.css';
import './style/style.css';
import './style/fonts.css';
import React, { createContext, useReducer } from 'react';
import Nav from './components/Nav';
import Main from './components/Main';

import {
  dataBaseReducer,
  initialDataBase,
} from './reducer/dataBaseReducer';

//@ts-ignore
export const DataBaseContext: any = createContext();

function App(): JSX.Element {
  //@ts-ignore
  const [state, dispatch] = useReducer(
    dataBaseReducer,
    initialDataBase
  );

  return (
    <DataBaseContext.Provider value={{ state, dispatch }}>
      <Nav />
      <Main />
    </DataBaseContext.Provider>
  );
}

export default App;
