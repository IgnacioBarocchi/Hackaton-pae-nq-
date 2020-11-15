import React from 'react';
import { connect, useSelector } from 'react-redux';
import {
  sortByLikes_action,
  sortByEcologia_action,
  sortByMedicina_action,
  sortByTransporte_action,
  sortByTime_action,
  sortByInclusion_action,
  sortByEconomia_action,
} from '../store/actions/actions';
import store from '../store/store';

interface RootState {
  isOn: boolean;
}

const mapState = (state: RootState) => {
  return { ...state };
};

const mapDispatch = {
  sortByLikes_action,
  sortByEcologia_action,
  sortByMedicina_action,
  sortByTransporte_action,
  sortByTime_action,
  sortByInclusion_action,
  sortByEconomia_action,
};

const connector = connect(mapState, mapDispatch);

function Nav() {
  const state = useSelector((state) => state);
  return (
    <nav className="nav">
      <div className="menu">
        <ul className="menu-list">
          <li className="menu-item">
            <button className="btn refresh">
              <span style={{ color: 'blue' }}>
                Actualizar Resultados
              </span>
              {/* void */}
            </button>
            |
          </li>
          <li className="men-item">
            <button
              className="btn"
              id="most-recent"
              onClick={() => {
                store.dispatch(sortByTime_action(state));
              }}
            >
              Más reciente
            </button>
            |
          </li>
          <li className="menu-item">
            <button
              className="btn"
              id="most-liked"
              onClick={() => {
                store.dispatch(sortByLikes_action(state));
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
                store.dispatch(sortByEcologia_action(state));
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
                store.dispatch(sortByMedicina_action(state));
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
                store.dispatch(sortByTransporte_action(state));
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
                store.dispatch(sortByInclusion_action(state));
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
                store.dispatch(sortByEconomia_action(state));
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

export default connector(Nav);
