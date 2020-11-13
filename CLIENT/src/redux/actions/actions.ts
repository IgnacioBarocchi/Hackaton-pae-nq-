import { ACTIONS } from '../actions/actionsTypes';

export const updateItem = (description: string) => ({
  type: ACTIONS.UPDATE_ITEM,
  payload: {
    description,
  },
});

export const sortByLikes = (description: string) => ({
  type: ACTIONS.SORTED_BY_LIKES,
  payload: {
    description,
  },
});

export const sortByEcologia = (description: string) => ({
  type: ACTIONS.SORTED_BY_TAG_ECOLOGIA,
  payload: {
    description,
  },
});

export const sortByMedicina = (description: string) => ({
  type: ACTIONS.SORTED_BY_TAG_MEDICINA,
  payload: {
    description,
  },
});

export const sortByTransporte = (description: string) => ({
  type: ACTIONS.SORTED_BY_TAG_TRANSPORTE,
  payload: {
    description,
  },
});

export const sortByTime = (description: string) => ({
  type: ACTIONS.SORTED_BY_TIME,
  payload: {
    description,
  },
});

export const sortByInclusion = (description: string) => ({
  type: ACTIONS.SORTED_BY_TAG_INCLUSION,
  payload: {
    description,
  },
});

export const sortByEconomia = (description: string) => ({
  type: ACTIONS.SORTED_BY_TAG_ECONOMIA,
  payload: {
    description,
  },
});
