/* eslint-disable @typescript-eslint/ban-ts-comment */
import React, { useEffect } from 'react';
import { requestGraphql } from '../api/GithubReporterHelper';

export default function GithubReporter() {
    useEffect(() => {
        requestGraphql();
    });
    //@ts-ignore

    const branches = JSON.parse(localStorage.getItem('GitHub-repo'));
    if (!branches) return <h3>Cargando...</h3>;

    const { author, committedDate, message, oid } = branches.branch0.commits[0];

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
                <pre style={{ fontSize: '16px', color: '#0dbc79' }}>{oid}</pre>
            </div>
        </div>
    );
}
