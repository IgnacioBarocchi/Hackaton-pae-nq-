import './style/App.css';
import './style/style.css';
import './style/fonts.css';
import React, {
  useEffect,
  createContext,
  useReducer,
  useContext,
} from 'react';
import Nav from './components/Nav';
import Main from './components/Main';

import {
  dataBaseReducer,
  initialDataBase,
} from './reducer/dataBaseReducer';

//@ts-ignore
export const DataBaseContext: any = createContext();

const Data = () => {
  const { dispatch }: any = useContext(DataBaseContext);

  useEffect(() => {
    const data = localStorage.getItem('data');
    data
      ? dispatch({
          type: 'SORTED_BY_TIME',
          payload: data,
        })
      : localStorage.setItem('data', JSON.stringify(initialDataBase));
  });
  return <></>;
};

function App(): any {
  const [state, dispatch] = useReducer(
    dataBaseReducer,
    initialDataBase
  );
  return (
    <DataBaseContext.Provider value={{ state, dispatch }}>
      <Data />
      <Nav />
      <Main />
    </DataBaseContext.Provider>
  );
}

export default App;
