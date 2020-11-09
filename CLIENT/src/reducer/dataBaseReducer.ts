import { sortByLikes, sortByTag } from "../helpers/dbSorters";
export const initialState = null;

const ACTIONS = {
  SORTED_BY_LIKES: "SORTED_BY_LIKES",
  SORTERED_BY_TAGS: "SORTERED_BY_TAGS",
  SORTED_BY_TIME: "SORTED_BY_TIME:",
};

export const dataBaseReducer = (
  state: any,
  action: { type: any; payload: any }
) => {
  switch (action.type) {
    case ACTIONS.SORTED_BY_LIKES:
      return sortByLikes(action.payload);
    case ACTIONS.SORTERED_BY_TAGS:
      return sortByTag(action.payload, "ecología");
    case ACTIONS.SORTED_BY_TIME:
      return state;
  }
};
