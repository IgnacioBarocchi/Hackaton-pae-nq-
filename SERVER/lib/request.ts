import fetch from 'node-fetch';
import { getPost } from './scraper';
import type { idea } from '../utils/types';

export const request = async (url: string): Promise<idea> => {
  const fetchUrl = await fetch(url);
  const result: string | void = await fetchUrl
    .text() /*textConverted*/
    //  This catch block shouln't be here since im not working with chains => I should replace it with try catch
    .catch((e) => {
      if (e) throw new Error('xd');
    });
  return getPost(result);
};
