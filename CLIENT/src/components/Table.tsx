import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import type { idea } from '../data/COLLECTION_OF_IDEAS_FROM_HACKATHON_PAE';
import { sortByLikes } from '../store/helpers/dbSorters';
import { Ranking, StyledInputNumber, StyledTable } from '../style/styled';

export default function Table() {
    // The contex
    // eslint-disable-next-line no-shadow
    const state = useSelector((state) => state);
    const [number, setNumber] = useState(5);

    if (!sortByLikes) return <h3>Cargando...</h3>;

    return (
        <Ranking id="top-10">
            <h2>
                Top{' '}
                <StyledInputNumber
                    type="number"
                    min="1"
                    // Todo: Convert this to an action
                    // @ts-ignore
                    max={sortByLikes([...state]).length.toString()}
                    value={number.toString()}
                    onChange={(e) => {
                        setNumber(parseInt(e.target.value));
                    }}
                />
            </h2>
            <StyledTable id="tbody">
                <tbody>
                    <tr>
                        <th>Proyecto</th>
                        <th style={{ textAlign: 'center' }}>Likes</th>
                        <th style={{ textAlign: 'center' }}>Tema</th>
                    </tr>

                    {
                        // Todo: This should trigger an action
                        // @ts-ignore
                        sortByLikes([...state])
                            .slice(0, number)
                            .map((record: idea, index: number) => {
                                return (
                                    <tr key={index}>
                                        <td>{record.title}</td>
                                        <td style={{ textAlign: 'center' }}>{record.likes}</td>
                                        <td style={{ textAlign: 'center' }}>
                                            {' '}
                                            {record.tags.length === 0
                                                ? ''
                                                : record.tags.length > 1
                                                ? record.tags.map((tag, index) => <span key={index}>#{tag}, </span>)
                                                : record.tags.map((tag, index) => <span key={index}>#{tag} </span>)}
                                        </td>
                                    </tr>
                                );
                            })
                    }
                </tbody>
            </StyledTable>
        </Ranking>
    );
}
