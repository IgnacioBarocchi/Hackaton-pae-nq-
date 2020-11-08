import React from "react";

export default function Ul(props) {
  const data = props.db.db;
  return (
    <ul>
      {data.map((record) => (
        <li className="box app-list-element card">
          <header
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "baseline",
            }}
          >
            <h3>{record.title}</h3>
            <span>
              {record.likes}
              <span className="heart-icon"> ❤</span>
            </span>
          </header>
          <p>{record.description}</p>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <p>
              Tags:{" "}
              <span className="tag-span">
                #
                {!record.tags || record.tags.length === 0
                  ? record.tags
                  : `${record.tags.join(" #")}`}
              </span>
            </p>
            <p>
              <a href={record.source}>{record.source}</a>
            </p>
          </div>
        </li>
      ))}
    </ul>
  );
}
/**
     

         transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    transition-property: box-shadow;
 */
