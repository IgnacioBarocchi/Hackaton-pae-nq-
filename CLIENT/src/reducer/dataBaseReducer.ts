import { sortByLikes, sortByTag } from '../helpers/dbSorters';

import { COLLECTION_OF_IDEAS_FROM_HACKATHON_PAE } from '../data/COLLECTION_OF_IDEAS_FROM_HACKATHON_PAE';

export const initialDataBase = COLLECTION_OF_IDEAS_FROM_HACKATHON_PAE;

export const sortedByLikes = sortByLikes(
  COLLECTION_OF_IDEAS_FROM_HACKATHON_PAE
);

const ACTIONS = {
  SORTED_BY_LIKES: 'SORTED_BY_LIKES',
  SORTED_BY_TIME: 'SORTED_BY_TIME',
  SORTERED_BY_TAG_ECOLOGIA: 'SORTERED_BY_TAG_ECOLOGIA',
  SORTERED_BY_TAG_MEDICINA: 'SORTERED_BY_TAG_MEDICINA',
  SORTERED_BY_TAG_TRANSPORTE: 'SORTERED_BY_TAG_TRANSPORTE',
  SORTERED_BY_TAG_INCLUSION: 'SORTERED_BY_TAG_INCLUSION',
  SORTERED_BY_TAG_ECONOMIA: 'SORTERED_BY_TAG_ECONOMIA',
};

export const dataBaseReducer = (
  state: any,
  action: { type: any; payload: any }
) => {
  switch (action.type) {
    case ACTIONS.SORTED_BY_LIKES:
      return sortByLikes(action.payload);
    case ACTIONS.SORTERED_BY_TAG_ECOLOGIA:
      return sortByTag(sortedByLikes, 'ecología');
    case ACTIONS.SORTERED_BY_TAG_MEDICINA:
      return sortByTag(sortedByLikes, 'medicina');
    case ACTIONS.SORTERED_BY_TAG_TRANSPORTE:
      return sortByTag(sortedByLikes, 'transporte');
    case ACTIONS.SORTERED_BY_TAG_INCLUSION:
      return sortByTag(sortedByLikes, 'inclusión');
    case ACTIONS.SORTERED_BY_TAG_ECONOMIA:
      return sortByTag(sortedByLikes, 'economía');
    case ACTIONS.SORTED_BY_TIME:
      return state;
  }
};
