import { sortByLikes, sortByTag } from '../helpers/dbSorters';
import { COLLECTION_OF_IDEAS_FROM_HACKATHON_PAE } from '../data/COLLECTION_OF_IDEAS_FROM_HACKATHON_PAE';
import type { idea } from '../data/COLLECTION_OF_IDEAS_FROM_HACKATHON_PAE';
import { favouriteRecordUpdater } from '../helpers/favouriteRecordUpdater';
import { isId, isIterable } from '../helpers/payloadValidator';
import { ACTIONS } from './actions';

export const initialDataBase = COLLECTION_OF_IDEAS_FROM_HACKATHON_PAE;
export const sortedByLikes = sortByLikes([...initialDataBase]);

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

export const dataBaseReducer = (
  state: idea[],
  action: { type: string; payload: any }
) => {
  let mutalbleCollection;
  let id;

  if (state) {
    if (isIterable(action.payload)) {
      mutalbleCollection = [...action.payload];
    } else if (isId(action.payload?.id)) {
      id = action.payload?.id;
    }
  }

  switch (action.type) {
    case UPDATE_ITEM:
      return favouriteRecordUpdater([...state], id);
    case SORTED_BY_LIKES:
      return sortByLikes(mutalbleCollection);
    case SORTED_BY_TAG_ECOLOGIA:
      return sortByTag('ecología', sortedByLikes);
    case SORTED_BY_TAG_MEDICINA:
      return sortByTag('medicina', sortedByLikes);
    case SORTED_BY_TAG_TRANSPORTE:
      return sortByTag('transporte', sortedByLikes);
    case SORTED_BY_TAG_INCLUSION:
      return sortByTag('inclusión', sortedByLikes);
    case SORTED_BY_TAG_ECONOMIA:
      return sortByTag('economía', sortedByLikes);
    case SORTED_BY_TIME:
      return initialDataBase;
    default:
      throw new Error();
  }
};
