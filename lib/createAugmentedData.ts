import { COLLECTION_OF_IDEAS_FROM_HACKATHON_PAE } from "../data/COLLECTION_OF_IDEAS_FROM_HACKATHON_PAE";
import type { idea } from "../utils/types";

let augumentedData: idea[] /*Mutable*/ = [
  ...COLLECTION_OF_IDEAS_FROM_HACKATHON_PAE,
];

export const getAugmentedData = () => {
  for (const record of augumentedData) {
    let doc = record.description.split(".");
    let shuffled: string = doc.sort(() => Math.random() - 0.5).join(".");
    record.description = shuffled;
  }
  return augumentedData;
};
