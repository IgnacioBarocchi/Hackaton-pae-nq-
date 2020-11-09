import React, { useState } from "react";

export default function Table(props) {
  const [number, setNumber] = useState(5);
  const db = props.db.db;
  console.log(db.length);
  return (
    <div id="top-10" className="box big box-content">
      <h2>
        Top{" "}
        <input
          type="number"
          min="1"
          max={db.length.toString()}
          className="input-number"
          value={number.toString()}
          onChange={(e) => {
            setNumber(e.target.value);
            console.log(number);
          }}
        />
      </h2>
      <table id="tbody">
        <tr>
          <th>Proyecto</th>
          <th>Likes</th>
          <th>Tag</th>
        </tr>
        {db.slice(0, number).map((record) => {
          return (
            <tr>
              <td>{record.title}</td>
              <td style={{ textAlign: "center" }}>{record.likes}</td>
              <td style={{ textAlign: "center" }}>
                {" "}
                {record.tags.length === 0
                  ? ""
                  : record.tags.map((tag) => (
                      <span className="tag-span">#{tag}</span>
                    ))}
              </td>
            </tr>
          );
        })}
      </table>
    </div>
  );
}
