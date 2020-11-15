import {
  collection,
  COLLECTION_OF_IDEAS_FROM_HACKATHON_PAE as initialState,
} from '../../data/COLLECTION_OF_IDEAS_FROM_HACKATHON_PAE';
import { ACTIONS } from '../actions/actionsTypes';
import * as get from '../helpers/stateProcessors';

const {
  UPDATE_ITEM,
  SORTED_BY_LIKES,
  SORTED_BY_TAG_ECOLOGIA,
  SORTED_BY_TAG_MEDICINA,
  SORTED_BY_TAG_TRANSPORTE,
  SORTED_BY_TAG_INCLUSION,
  SORTED_BY_TAG_ECONOMIA,
  SORTED_BY_TIME,
} = ACTIONS;

export const ideasReducer = (
  state = initialState,
  action: { type: string; payload: any }
): collection => {
  const State = [ ...state ];

  switch (action.type) {
    case UPDATE_ITEM:
      return get.updateFavorite(State, action.payload?.id);
    case SORTED_BY_LIKES:
      return get.likes(State);
    case SORTED_BY_TAG_ECOLOGIA:
      return get.ecologia(State);
    case SORTED_BY_TAG_MEDICINA:
      return get.medicina(State);
    case SORTED_BY_TAG_TRANSPORTE:
      return get.transporte(State);
    case SORTED_BY_TAG_INCLUSION:
      return get.inclusion(State);
    case SORTED_BY_TAG_ECONOMIA:
      return get.economia(State);
    case SORTED_BY_TIME:
      return initialState;
    default:
      return initialState;
  }
};
