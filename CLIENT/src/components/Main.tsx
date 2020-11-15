import React from 'react';
import Ul from './Ul';
import Table from './Table';
import Chart_ from './Chart';
import { StyledColumnWrapper, StyledMainContent, StyledSection } from '../style/styled';

export default function Main() {
    return (
        <StyledMainContent>
            <StyledSection>
                <div id="ideas">
                    <Ul />
                </div>
            </StyledSection>
            <StyledSection>
                <StyledColumnWrapper>
                    <h3 id="date"></h3>
                    <Table />
                    <Chart_ />
                </StyledColumnWrapper>
            </StyledSection>
        </StyledMainContent>
    );
}
