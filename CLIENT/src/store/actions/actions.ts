/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { ACTIONS } from './actionsTypes';

/* They must carry the state since there the favourite ideas can change*/

export const updateItem_action = (state: any) => ({
    type: ACTIONS.UPDATE_ITEM,
    payload: state,
});

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const sortByLikes_action = (state: any) => ({
    type: ACTIONS.SORTED_BY_LIKES,
    payload: state,
});

export const sortByEcologia_action = (state: any) => ({
    type: ACTIONS.SORTED_BY_TAG_ECOLOGIA,
    payload: state,
});

export const sortByMedicina_action = (state: any) => ({
    type: ACTIONS.SORTED_BY_TAG_MEDICINA,
    payload: state,
});

export const sortByTransporte_action = (state: any) => ({
    type: ACTIONS.SORTED_BY_TAG_TRANSPORTE,
    payload: state,
});

export const sortByTime_action = (state: any) => ({
    type: ACTIONS.SORTED_BY_TIME,
    payload: state,
});

export const sortByInclusion_action = (state: any) => ({
    type: ACTIONS.SORTED_BY_TAG_INCLUSION,
    payload: state,
});

export const sortByEconomia_action = (state: any) => ({
    type: ACTIONS.SORTED_BY_TAG_ECONOMIA,
    payload: state,
});
