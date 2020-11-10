import React from 'react';
import type { idea } from '../data/COLLECTION_OF_IDEAS_FROM_HACKATHON_PAE';

//@ts-ignore
export default function Ul({ dataBase, onToggleFavourite }) {
  return (
    <ul id="#project-list">
      {dataBase.map((record: idea, index: number) => (
        <li className="app-list-element" key={index}>
          <div className="box card">
            <header
              className="card-title"
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'baseline',
                backgroundColor: record.boolVal ? '#282c34' : '',
              }}
            >
              <h3 style={{ color: record.boolVal ? '#e1e4e8' : '' }}>
                {record.title}
              </h3>
              <div>
                <span
                  style={{
                    fontSize: '20px',
                    padding: '2px',
                    borderRadius: '50%',
                    width: '2em',
                    height: '2em',
                    color: 'gray',
                    outline: 'none',
                  }}
                >
                  {record.likes}
                  <span className="heart-icon"> ❤</span>
                </span>
                <button
                  type="button"
                  className="tag-span"
                  style={{
                    fontSize: '20px',
                    padding: '2px',
                    borderRadius: '50%',
                    width: '2em',
                    height: '2em',
                    color: 'gray',
                    outline: 'none',
                  }}
                  onClick={() => onToggleFavourite(record.id)}
                >
                  {record.boolVal ? '★' : '☆'}
                </button>
              </div>
            </header>
            <div className="box-content">
              <p>{record.description}</p>
              {record.tags.length === 0
                ? ''
                : record.tags.map((tag, index) => (
                    <span key={index} className="tag-span">
                      #{tag}
                    </span>
                  ))}
              <p>
                <a href={record.source}>
                  {record.source.replace(
                    'https://ar.socialab.com/challenges',
                    ``
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
