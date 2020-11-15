/* eslint-disable template-curly-spacing */
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
  margin-bottom: 20px;
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
  font-size: 20px;
  padding: 2px;
  border-radius: 50%;
  width: 2em;
  height: 2em;
  color: gray;
  outline: none;
`;

export const HeartIcon = styled.span`
  color: Crimson;
`;

export const StyledMainContent = styled.main`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
export const StyledSection = styled.section`
  margin-top: 70px;
  width: 50%;
`;

export const StyledColumnWrapper = styled.div`
  position: fixed;
  margin: 0 20px;
  width: 48%;
`;
const box = `
color: #24292e;
border-radius: 8px;
border: 1px solid #d1d5da;
background-color: white;
border-radius: 4px;
border-top-left-radius: 4px;
border-top-right-radius: 4px;
border-bottom-right-radius: 4px;
border-bottom-left-radius: 4px;
`;

export const StyledBox = styled.div`
  ${box}
`;
export const StyledBigBox = styled.div`
  ${box}
  margin-bottom: 40px;
`;
export const StyledBoxContent = styled.div`
  ${box}
  padding: 10px;
`;

export const SyledCardHeader = styled.header`
  display: flex;
  padding: 0 10px;
  border-bottom: 1px solid #d1d5da;
  background-color: #e1e4e8;
  justify-content: space-between;
  align-items: baseline;
  display: flex;
  justify-content: space-between;
  align-items: baseline;
`;

export const styledCard = styled.div`
  opacity: 1;
  transition: 4s;
  -webkit-transition: 4s;
  -moz-transition: 4s;
  -ms-transition: 4s;
  -o-transition: 4s;
  &:hover {
    transition: 1s;
    box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2),
      0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);
  }
  &:not(:hover) {
    transition: 1s;
  }
`;

export const StyledTable = styled.table`
  border-collapse: collapse;
  width: 100%;
`;

export const StyledTh = styled.tr`
  border: 1px solid #dddddd;
  text-align: left;
  padding: 5px;
  &:nth-child(even) {
    background-color: #f6f8fa;
  }
`;

export const StyledTd = styled.tr`
  border: 1px solid #dddddd;
  text-align: left;
  padding: 5px;
`;

export const StyledTagSpan = styled.span`
  text-transform: capitalize;
  margin-right: 0.5em;
  color: #24292e;
  padding: 2px 6px;
  border-radius: 30px;
  border: 1px solid #d1d5da;
  background-color: #f6f8fa;
  border-radius: 6px;
  -webkit-border-radius: 6px;
  -moz-border-radius: 6px;
  -ms-border-radius: 6px;
  -o-border-radius: 6px;
`;

export const StyledInputNumber = styled.input`
  outline: none;
  border: 0;
  width: 60px;
  font-size: 1em;
  font-weight: bold;
`;

export const Ranking = styled.div`
  overflow-y: auto;
  max-height: 300px;
`;
