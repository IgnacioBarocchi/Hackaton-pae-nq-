import styled from 'styled-components';

export const StyledNavigation = styled.nav`
  z-index: 2;
  position: fixed;
  display: flex;
  width: 100%;
  max-height: 3em;
  background-color: white;
  padding: 5px;
  margin: 0;
  border-top: 3px solid #d1d5da;
  color: #24292e;
  border-bottom: 1px solid #d1d5da;
  align-items: center;
  justify-content: center;
`;

export const StyledButton = styled.button`
  cursor: pointer;
  background-color: transparent;
  outline: none;
  border: none;
  padding: 0;
`;

export const StyledLi = styled.li`
  list-style: none;
  margin: 0;
`;

export const StyledUl = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: row;
  align-items: center;
  * {
    margin: 10px;
  }
`;

export const MenuWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const IconContainer = styled.span`
  font-size: '20px';
  padding: '2px';
  border-radius: '50%';
  width: '2em';
  height: '2em';
  color: 'gray';
  outline: 'none';
`;

export const HeartIcon = styled.span`
  color: Crimson;
`;

export const SyledCardHeader = styled.header`
  display: 'flex';
  padding: 0 10px;
  border-bottom: 1px solid #d1d5da;
  background-color: '#e1e4e8';
  justify-content: 'space-between';
  align-items: 'baseline';
  display: 'flex';
  justify-content: 'space-between';
  align-items: 'baseline';
`;
