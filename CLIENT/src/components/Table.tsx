import React, { useState } from 'react';
import type { idea } from '../data/COLLECTION_OF_IDEAS_FROM_HACKATHON_PAE';
import { sortedByLikes } from '../reducer/dataBaseReducer';

export default function Table() {
  const [number, setNumber] = useState(5);

  if (!sortedByLikes) return <h3>Cargando...</h3>;

  return (
    <div id="top-10" className="box big box-content">
      <h2>
        Top{' '}
        <input
          type="number"
          min="1"
          max={sortedByLikes.length.toString()}
          className="input-number"
          value={number.toString()}
          onChange={(e) => {
            setNumber(parseInt(e.target.value));
          }}
        />
      </h2>
      <table id="tbody">
        <tbody>
          <tr>
            <th>Proyecto</th>
            <th style={{ textAlign: 'center' }}>Likes</th>
            <th style={{ textAlign: 'center' }}>Tema</th>
          </tr>
          {sortedByLikes
            .slice(0, number)
            .map((record: idea, index: number) => {
              return (
                <tr key={index}>
                  <td>{record.title}</td>
                  <td style={{ textAlign: 'center' }}>
                    {record.likes}
                  </td>
                  <td style={{ textAlign: 'center' }}>
                    {' '}
                    {record.tags.length === 0
                      ? ''
                      : record.tags.length > 1
                      ? record.tags.map((tag, index) => (
                          <span key={index}>#{tag}, </span>
                        ))
                      : record.tags.map((tag, index) => (
                          <span key={index}>#{tag} </span>
                        ))}
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
}
