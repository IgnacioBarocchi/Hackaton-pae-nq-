import React from "react";
import Ul from "./Ul";
import Table from "./Table";
import Chart_ from "./Chart";

export default function Main(props) {
  return (
    <main className="main-content">
      <div className="left">
        <div id="ideas">
          <Ul db={props} />
        </div>
      </div>
      <div className="right">
        <section className="col-wrapper">
          <h3 id="date"></h3>
          <Table db={props} />
          <Chart_ db={props} />
        </section>
      </div>
    </main>
  );
}
