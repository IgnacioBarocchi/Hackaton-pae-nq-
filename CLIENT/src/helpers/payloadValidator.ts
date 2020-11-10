export function isIterable(obj: any) {
  // checks for null and undefined
  if (obj == null) {
    return false;
  }
  return typeof obj[Symbol.iterator] === 'function';
}
/*
export const isIterable = (payload: any): boolean => {
  return Symbol.iterator in Object(payload);
};
*/

export const isId = (payload: any) => {
  if (isNaN(payload)) return false;
  return true;
};
