import React, { useEffect } from 'react';
import { requestGraphql } from '../helpers/GithubReport';

export default function GithubReporter() {
  useEffect(() => {
    requestGraphql();
  });
  //@ts-ignore

  const breanches = JSON.parse(localStorage.getItem('GitHub-repo'));
  if (!breanches) return <h3>Cargando...</h3>;

  const {
    author,
    committedDate,
    message,
    oid,
  } = breanches.branch0.commits[0];

  return (
    <div className="box box-content">
      <div>
        <strong>Author: </strong> {author.name}
        <strong> Fecha: </strong> {committedDate}
      </div>
      <div>
        <strong> Commit Message: </strong>
        <span style={{ color: '#11a8cd' }}>{message}</span>
        <strong> Hash: </strong>
        <pre style={{ fontSize: '16px', color: '#0dbc79' }}>
          {oid}
        </pre>
      </div>
    </div>
  );
}
