import type { idea } from "../utils/types";
import { LABELS } from "../utils/labels";

const normalize = (text: string): string => {
  return text.toLowerCase().replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "");
};

export const labelThisDocument = (record: idea) => {
  const keywords: string[] = Object.keys(LABELS);
  for (const keyword of keywords) {
    const description: string[] = normalize(record.description).split(" ");
    if (description.includes(keyword) && !record.tags.includes(keyword)) {
      //@ts-ignore
      record.tags.push(LABELS[keyword]);
    }
  }
  return record;
};

// const cleanLabelsOf = (record) => {};

// const labelLocally = (db) => {
//   bd.map((record) => labelThisDocument(record));
// };
/**
 * @todo
 * This hash table
 * @source
 * https://www.youtube.com/watch?v=HoT3y-L2t20&t=620s
 */
const getWeightedLabels = (words: string[]) => {
  let dic: { [key: string]: number } = {};
  for (let word of words) {
    if (normalize(word) in dic) {
      ++dic[normalize(word)];
    } else {
      dic[normalize(word)] = 1;
    }
  }
};
