import React, { useContext } from "react";
import { DataBaseContext } from "../App";
import type {idea} from "../data/COLLECTION_OF_IDEAS_FROM_HACKATHON_PAE"

export default function Ul() {
  const { state } = useContext(DataBaseContext);
  return (
    <ul id="#project-list">
      {state.map((record:idea, index: number) => (
        <li className="app-list-element " key={index}>
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
