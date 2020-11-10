import React, { useState } from 'react';
import Ul from './Ul';
import Table from './Table';
import Chart_ from './Chart';
import GithubReporter from './GithubReporter';
import { initialDataBase } from '../reducer/dataBaseReducer';

export default function Main() {
  const [dataBase, setdataBase] = useState(initialDataBase);

  function handleToggleFavourite(id: number) {
    const newDataBase = dataBase.map((item) => {
      if (item.id === id) {
        const updatedItem = {
          ...item,
          boolVal: !item.boolVal,
        };

        return updatedItem;
      }

      return item;
    });
    //@ts-ignore
    setdataBase(newDataBase);
    console.log(dataBase);
  }
  return (
    <main className="main-content">
      <div className="left">
        <div id="ideas">
          <Ul
            dataBase={dataBase}
            onToggleFavourite={handleToggleFavourite}
          />
        </div>
      </div>
      <div className="right">
        <section className="col-wrapper">
          <h3 id="date"></h3>
          <Table />
          <Chart_ />
          <GithubReporter />
        </section>
      </div>
    </main>
  );
}
