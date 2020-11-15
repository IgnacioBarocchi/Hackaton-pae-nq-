import { sortByLikes, sortByTag } from './dbSorters';
import {
  collection,
  COLLECTION_OF_IDEAS_FROM_HACKATHON_PAE as initialState_ideas_of_hackathon,
} from '../../data/COLLECTION_OF_IDEAS_FROM_HACKATHON_PAE';
import { favouriteRecordUpdater } from '../helpers/favouriteRecordUpdater';

export const likes = (array = [ ...initialState_ideas_of_hackathon ]) =>
  sortByLikes(array);

export const ecologia = (array = likes()): collection =>
  sortByTag('ecología', array);

export const medicina = (array = likes()): collection =>
  sortByTag('medicina', array);

export const transporte = (array = likes()): collection =>
  sortByTag('transporte', array);

export const inclusion = (array = likes()): collection =>
  sortByTag('inclusión', array);

export const economia = (array = likes()): collection =>
  sortByTag('economía', array);

export const updateFavorite = (
  array = likes(),
  id: number
): collection => favouriteRecordUpdater(array, id);
