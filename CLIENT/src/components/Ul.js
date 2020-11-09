import React from "react";

export default function Ul(props) {
  const data = props.db.db;
  return (
    <ul id="#project-list">
      {data.map((record) => (
        <li className="app-list-element ">
          <div className="box card">
            <header
              className="card-title"
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
            <div className="box-content">
              <p>{record.description}</p>
              {record.tags.length === 0
                ? ""
                : record.tags.map((tag) => (
                    <span className="tag-span">#{tag}</span>
                  ))}
              <p>
                <a href={record.source}>
                  {record.source.replace(
                    "https://ar.socialab.com/challenges",
                    ""
                  )}
                </a>
              </p>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}
