import React from 'react';
import Ul from './Ul';
import Table from './Table';
import Chart_ from './Chart';
// import GithubReporter from './GithubReporter';

export default function Main() {
  return (
      <main className="main-content">
          <div className="left">
              <div id="ideas">
                  <Ul />
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
