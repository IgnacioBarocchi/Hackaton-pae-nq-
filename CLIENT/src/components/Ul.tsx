import React from 'react';
import { connect } from 'react-redux';
import { idea } from '../data/COLLECTION_OF_IDEAS_FROM_HACKATHON_PAE';
import { updateItem_action } from '../store/actions/actions';
import store from '../store/store';
import {
    FavouriteBtn,
    HeartIcon,
    IconContainer,
    StyledBoxCard,
    StyledBoxContent,
    StyledMainLi,
    StyledTagSpan,
    SyledCardHeader,
} from '../style/styled';

interface RootState {
    isOn: boolean;
}

const mapState = (state: RootState) => {
    return { ...state };
};
const mapDispatch = { updateItem_action };
const connector = connect(mapState, mapDispatch);

function Ul() {
    return (
        <ul id="#project-list">
            {store.getState().map((record: idea, index: number) => (
                <StyledMainLi key={index}>
                    <StyledBoxCard>
                        <SyledCardHeader>
                            <h3 style={{ color: record.boolVal ? '#e1e4e8' : '' }}>{record.title}</h3>
                            <div>
                                <IconContainer>
                                    {record.likes}
                                    <HeartIcon> ❤</HeartIcon>
                                </IconContainer>
                                <FavouriteBtn onClick={() => store.dispatch(updateItem_action(record.id))}>
                                    {record.boolVal ? '★' : '☆'}
                                </FavouriteBtn>
                            </div>
                        </SyledCardHeader>
                        <StyledBoxContent>
                            <p>{record.description}</p>
                            {record.tags.length === 0
                                ? ''
                                : record.tags.map((tag, index) => <StyledTagSpan key={index}>#{tag}</StyledTagSpan>)}
                            <p>
                                <a href={record.source}>
                                    {record.source.replace('https://ar.socialab.com/challenges', '')}
                                </a>
                            </p>
                        </StyledBoxContent>
                    </StyledBoxCard>
                </StyledMainLi>
            ))}
        </ul>
    );
}

export default connector(Ul);
