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
import {
  MenuWrapper,
  StyledButton,
  StyledLi,
  StyledNavigation,
  StyledUl,
} from '../style/styled';
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
      <StyledNavigation>
          <MenuWrapper>
              <StyledUl>
                  <StyledLi>
                      <StyledButton className="refresh">
                          Actualizar Resultados
                      </StyledButton>
                      |
                  </StyledLi>
                  <StyledLi>
                      <StyledButton
              id="most-recent"
              onClick={ () => {
                store.dispatch(sortByTime_action(state));
              } }
            >
                          Más reciente
                      </StyledButton>
                      |
                  </StyledLi>
                  <StyledLi>
                      <StyledButton
              id="most-liked"
              onClick={ () => {
                store.dispatch(sortByLikes_action(state));
              } }
            >
                          Cantidad de likes
                      </StyledButton>
                      |
                  </StyledLi>
                  <StyledLi>
                      <StyledButton
              id="ecología"
              onClick={ () => {
                store.dispatch(sortByEcologia_action(state));
              } }
            >
                          #Ecología
                      </StyledButton>
                      |
                  </StyledLi>
                  <StyledLi>
                      <StyledButton
              id="medicina"
              onClick={ () => {
                store.dispatch(sortByMedicina_action(state));
              } }
            >
                          #Medicina
                      </StyledButton>
                      |
                  </StyledLi>
                  <StyledLi>
                      <StyledButton
              id="transporte"
              onClick={ () => {
                store.dispatch(sortByTransporte_action(state));
              } }
            >
                          #Transporte
                      </StyledButton>
                      |
                  </StyledLi>
                  <StyledLi>
                      <StyledButton
              id="inclusión"
              onClick={ () => {
                store.dispatch(sortByInclusion_action(state));
              } }
            >
                          #Inclusión
                      </StyledButton>
                      |
                  </StyledLi>
                  <StyledLi>
                      <StyledButton
              id="economía"
              onClick={ () => {
                store.dispatch(sortByEconomia_action(state));
              } }
            >
                          #Economía
                      </StyledButton>
                  </StyledLi>
              </StyledUl>
          </MenuWrapper>
      </StyledNavigation>
  );
}

export default connector(Nav);
