import React, { useContext } from 'react';
import Ul from './Ul';
import Table from './Table';
import Chart_ from './Chart';
import GithubReporter from './GithubReporter';
import { DataBaseContext } from '../App';

export default function Main() {
  const { dispatch, state } = useContext(DataBaseContext);

  if (!state) {
    return <h3>Cargando...</h3>;
  }

  const handleToggleFavourite = (id: number) => {
    dispatch({ type: 'UPDATE_ITEM', payload: id });
  };

  return (
    <main className="main-content">
      <div className="left">
        <div id="ideas">
          <Ul
            dataBase={state}
            onToggleFavourite={handleToggleFavourite}
          />
        </div>
      </div>
      <div className="right">
        <section className="col-wrapper">
          <h3 id="date"></h3>
          <Table />
          <Chart_ />
          {/* <GithubReporter /> */}
        </section>
      </div>
    </main>
  );
}
