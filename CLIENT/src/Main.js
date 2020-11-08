import React from "react";
import Ul from "./Ul";
import Table from "./Table";
import Chart from "./Chart";

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
          <div id="top-10" className="box big">
            <h2>
              Top{" "}
              <input type="number" min="1" className="input-number" value="5" />
            </h2>
            <Table db={props} />
          </div>
          <Chart db={props} />
        </section>
      </div>
    </main>
  );
}
