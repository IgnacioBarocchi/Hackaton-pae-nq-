import { idea } from '../../data/COLLECTION_OF_IDEAS_FROM_HACKATHON_PAE';

export const favouriteRecordUpdater = (
  array: any,
  idOfSelectedItem: number
) =>
  array.map((record: idea) => {
    if (record.id === idOfSelectedItem) {
      const updatedRecord = {
        ...record,
        boolVal: !record.boolVal,
      };
      return updatedRecord;
    }
    return record;
  });

/*
Using immer
import { produce } from 'immer';
produce(array, (draftState: any) => {
// @ts-ignore
draftState.record[idOfSelectedItem].boolVal = !draftState.record[
  idOfSelectedItem
].boolVal;
*/
