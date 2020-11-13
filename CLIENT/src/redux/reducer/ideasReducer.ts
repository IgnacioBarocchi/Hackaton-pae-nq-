import { COLLECTION_OF_IDEAS_FROM_HACKATHON_PAE } from '../../data/COLLECTION_OF_IDEAS_FROM_HACKATHON_PAE';
import type { idea } from '../../data/COLLECTION_OF_IDEAS_FROM_HACKATHON_PAE';
import { favouriteRecordUpdater } from '../../helpers/favouriteRecordUpdater';
import { isId, isIterable } from '../../helpers/payloadValidator';
import { ACTIONS } from '../actions/actionsTypes';
import {
  ecologia,
  medicina,
  transporte,
  inclusion,
  economia,
  likes,
} from '../helpers/functions';

export const initialDataBase = COLLECTION_OF_IDEAS_FROM_HACKATHON_PAE;

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
  state: idea[],
  action: { type: string; payload: any }
) => {
  if (!isIterable(action.payload) && isId(action.payload?.id)) {
    var id = action.payload?.id;
  }

  switch (action.type) {
    case UPDATE_ITEM:
      return favouriteRecordUpdater([...state], id);
    case SORTED_BY_LIKES:
      return likes([...state]);
    case SORTED_BY_TAG_ECOLOGIA:
      return ecologia([...state]);
    case SORTED_BY_TAG_MEDICINA:
      return medicina([...state]);
    case SORTED_BY_TAG_TRANSPORTE:
      return transporte([...state]);
    case SORTED_BY_TAG_INCLUSION:
      return inclusion([...state]);
    case SORTED_BY_TAG_ECONOMIA:
      return economia([...state]);
    case SORTED_BY_TIME:
      return COLLECTION_OF_IDEAS_FROM_HACKATHON_PAE;
    default:
      // throw new Error();
      initialDataBase;
  }
};
