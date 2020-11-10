import type { idea } from '../data/COLLECTION_OF_IDEAS_FROM_HACKATHON_PAE';

export const favouriteRecordUpdater = (array: any, id: number) =>
  array.map((record: idea) => {
    if (record.id === id) {
      return {
        ...record,
        boolVal: !record.boolVal,
      };
    }
    return record;
  });
