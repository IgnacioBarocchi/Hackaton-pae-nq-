import React from "react";

export default function Nav(props) {
  const db = props.db;
  return (
    <nav className="nav">
      <div className="menu">
        <ul className="menu-list">
          <li className="menu-item">
            <button className="btn refresh">
              <span style={{ color: "blue" }}>Actualizar Resultados</span>
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
            <button className="btn" id="most-liked">
              Cantidad de likes
            </button>
            |
          </li>
          <li className="menu-item">
            <button className="btn" id="ecología">
              #Ecología
            </button>
            |
          </li>
          <li className="menu-item">
            <button className="btn" id="medicina">
              #Medicina
            </button>
            |
          </li>
          <li className="menu-item">
            <button className="btn" id="transporte">
              #Transporte
            </button>
          </li>
          <li className="menu-item">
            <button className="btn" id="inclusión">
              #Inclusión
            </button>
          </li>
          <li className="menu-item">
            <button className="btn" id="economía">
              #Economía
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}
