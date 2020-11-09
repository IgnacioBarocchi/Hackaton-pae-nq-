import { sortByLikes, sortByTag } from "../helpers/dbSorters";

import { COLLECTION_OF_IDEAS_FROM_HACKATHON_PAE } from "../data/COLLECTION_OF_IDEAS_FROM_HACKATHON_PAE";
export const initialState = COLLECTION_OF_IDEAS_FROM_HACKATHON_PAE;

const ACTIONS = {
  SORTED_BY_LIKES: "SORTED_BY_LIKES",
  SORTED_BY_TIME: "SORTED_BY_TIME",
  SORTERED_BY_TAG_ECOLOGIA: "SORTERED_BY_TAG_ECOLOGIA",
  SORTERED_BY_TAG_MEDICINA: "SORTERED_BY_TAG_MEDICINA",
  SORTERED_BY_TAG_TRANSPORTE: "SORTERED_BY_TAG_TRANSPORTE",
  SORTERED_BY_TAG_INCLUSION: "SORTERED_BY_TAG_INCLUSION",
  SORTERED_BY_TAG_ECONOMIA: "SORTERED_BY_TAG_ECONOMIA",
};

export const dataBaseReducer = (
  state: any,
  action: { type: any; payload: any }
) => {
  switch (action.type) {
    case ACTIONS.SORTED_BY_LIKES:
      return sortByLikes(action.payload);
    case ACTIONS.SORTERED_BY_TAG_ECOLOGIA:
      return sortByTag(action.payload, "ecología");
    case ACTIONS.SORTERED_BY_TAG_MEDICINA:
      return sortByTag(action.payload, "medicina");
    case ACTIONS.SORTERED_BY_TAG_TRANSPORTE:
      return sortByTag(action.payload, "transporte");
    case ACTIONS.SORTERED_BY_TAG_INCLUSION:
      return sortByTag(action.payload, "inclusión");
    case ACTIONS.SORTERED_BY_TAG_ECONOMIA:
      return sortByTag(action.payload, "economía");
    case ACTIONS.SORTED_BY_TIME:
      return state;
  }
};
