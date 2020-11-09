//
import React, { useMemo, useContext } from "react";
import { Chart } from "react-charts";
import { DataBaseContext } from "../App";

export default function Chart_() {
  const { state } = useContext(DataBaseContext);
  return (
    <div id="chart" className="box big box-content">
      <h2>Temáticas</h2>
      {/* <canvas id="proyectCanvas" width="600" height="200"></canvas> */}
      <div
        style={{
          width: "400px",
          height: "300px",
        }}
      >
        <Chart
          data={useMemo(
            () => [
              {
                label: "Series 1",
                data: [
                  [0, 1],
                  [1, 2],
                  [2, 4],
                  [3, 2],
                  [4, 7],
                ],
              },
              {
                label: "Series 2",
                data: [
                  [0, 3],
                  [1, 1],
                  [2, 5],
                  [3, 6],
                  [4, 4],
                ],
              },
            ],
            []
          )}
          axes={useMemo(
            () => [
              { primary: true, type: "linear", position: "bottom" },
              { type: "linear", position: "left" },
            ],
            []
          )}
        />
      </div>
    </div>
  );
}
