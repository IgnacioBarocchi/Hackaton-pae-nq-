import React from 'react';
import { connect } from 'react-redux';
import { idea } from '../data/COLLECTION_OF_IDEAS_FROM_HACKATHON_PAE';
import { updateItem_action } from '../store/actions/actions';
import store from '../store/store';
import {
  HeartIcon,
  IconContainer,
  StyledLi,
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
              <StyledLi className="app-list-element" key={ index }>
                  <div className="box card">
                      <SyledCardHeader>
                          <h3 style={ { color: record.boolVal ? '#e1e4e8' : '' } }>
                              {record.title}
                          </h3>
                          <div>
                              <IconContainer>
                                  {record.likes}
                                  <HeartIcon> ❤</HeartIcon>
                              </IconContainer>
                              <button
                  type="button"
                  className="tag-span"
                  style={ {
                    fontSize: '20px',
                    padding: '2px',
                    borderRadius: '50%',
                    width: '2em',
                    height: '2em',
                    color: 'gray',
                    outline: 'none',
                  } }
                  onClick={ () =>
                    store.dispatch(updateItem_action(record.id))
                  }
                >
                                  {record.boolVal ? '★' : '☆'}
                              </button>
                          </div>
                      </SyledCardHeader>
                      <div className="box-content">
                          <p>{record.description}</p>
                          {record.tags.length === 0
                ? ''
                : record.tags.map((tag, index) => (
                    <span key={ index } className="tag-span">
                        #{tag}
                    </span>
                  ))}
                          <p>
                              <a href={ record.source }>
                                  {record.source.replace(
                    'https://ar.socialab.com/challenges',
                    ''
                  )}
                              </a>
                          </p>
                      </div>
                  </div>
              </StyledLi>
      ))}
      </ul>
  );
}

export default connector(Ul);
