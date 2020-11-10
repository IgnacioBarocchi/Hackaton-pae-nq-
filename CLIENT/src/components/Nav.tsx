import React, { useContext } from 'react';
import { DataBaseContext } from '../App';

export default function Nav() {
  const { dispatch, state } = useContext(DataBaseContext);
  return (
    <nav className="nav">
      <div className="menu">
        <ul className="menu-list">
          <li className="menu-item">
            <button className="btn refresh">
              <span style={{ color: 'blue' }}>
                Actualizar Resultados
              </span>
            </button>
            |
          </li>
          <li className="menu-item">
            <button className="btn" id="most-recent">
              Más reciente
            </button>
            |
          </li>
          <li className="menu-item">
            <button
              className="btn"
              id="most-liked"
              onClick={() => {
                dispatch({ type: 'SORTED_BY_LIKES', payload: state });
              }}
            >
              Cantidad de likes
            </button>
            |
          </li>
          <li className="menu-item">
            <button
              className="btn"
              id="ecología"
              onClick={() => {
                dispatch({
                  type: 'SORTERED_BY_TAG_ECOLOGIA',
                  payload: state,
                });
              }}
            >
              #Ecología
            </button>
            |
          </li>
          <li className="menu-item">
            <button
              className="btn"
              id="medicina"
              onClick={() => {
                dispatch({
                  type: 'SORTERED_BY_TAG_MEDICINA',
                  payload: state,
                });
              }}
            >
              #Medicina
            </button>
            |
          </li>
          <li className="menu-item">
            <button
              className="btn"
              id="transporte"
              onClick={() => {
                dispatch({
                  type: 'SORTERED_BY_TAG_TRANSPORTE',
                  payload: state,
                });
              }}
            >
              #Transporte
            </button>
            |
          </li>
          <li className="menu-item">
            <button
              className="btn"
              id="inclusión"
              onClick={() => {
                dispatch({
                  type: 'SORTERED_BY_TAG_INCLUSION',
                  payload: state,
                });
              }}
            >
              #Inclusión
            </button>
            |
          </li>
          <li className="menu-item">
            <button
              className="btn"
              id="economía"
              onClick={() => {
                dispatch({
                  type: 'SORTERED_BY_TAG_ECONOMIA',
                  payload: state,
                });
              }}
            >
              #Economía
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}
