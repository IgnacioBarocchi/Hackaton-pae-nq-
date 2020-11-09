import React, { useState, useContext } from "react";
import { DataBaseContext } from "../App";
import type {idea} from "../data/COLLECTION_OF_IDEAS_FROM_HACKATHON_PAE"
export default function Table() {
  const { state } = useContext(DataBaseContext);
  const [number, setNumber] = useState(5);

  return (
    <div id="top-10" className="box big box-content">
      <h2>
        Top{" "}
        <input
          type="number"
          min="1"
          max={state.length.toString()}
          className="input-number"
          value={number.toString()}
          onChange={(e) => {
            setNumber(parseInt(e.target.value));
            console.log(number);
          }}
        />
      </h2>
      <table id="tbody">
        <tr>
          <th>Proyecto</th>
          <th style={{ textAlign: "center" }}>Likes</th>
          <th style={{ textAlign: "center" }}>Tema</th>
        </tr>
        {state.slice(0, number).map((record:idea) => {
          return (
            <tr>
              <td>{record.title}</td>
              <td style={{ textAlign: "center" }}>{record.likes}</td>
              <td style={{ textAlign: "center" }}>
                {" "}
                {record.tags.length === 0
                  ? ""
                  : record.tags.length > 1
                  ? record.tags.map((tag) => <span>#{tag}, </span>)
                  : record.tags.map((tag) => <span>#{tag} </span>)}
              </td>
            </tr>
          );
        })}
      </table>
    </div>
  );
}
