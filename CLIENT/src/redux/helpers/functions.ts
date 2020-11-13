import { sortByLikes, sortByTag } from '../../helpers/dbSorters';
import { initialDataBase } from '../reducer/ideasReducer';

export const likes = (array = [...initialDataBase]) =>
  sortByLikes(array);

export const ecologia = (array = likes()) =>
  sortByTag('ecología', array);

export const medicina = (array = likes()) =>
  sortByTag('medicina', array);

export const transporte = (array = likes()) =>
  sortByTag('transporte', array);

export const inclusion = (array = likes()) =>
  sortByTag('inclusión', array);

export const economia = (array = likes()) =>
  sortByTag('economía', array);
