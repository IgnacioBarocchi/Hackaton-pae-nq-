import type {
  // collection,
  idea,
} from '../data/COLLECTION_OF_IDEAS_FROM_HACKATHON_PAE';

export const sortByLikes = (array: any) =>
  array.sort((a: idea, b: idea) =>
    parseInt(a.likes) < parseInt(b.likes)
      ? 1
      : parseInt(b.likes) < parseInt(a.likes)
      ? -1
      : 0
  );

export const sortByTag = (tag: string, array: any) =>
  array.sort((a: idea, b: idea) =>
    a.tags.includes(tag) < b.tags.includes(tag)
      ? 1
      : b.tags.includes(tag) < a.tags.includes(tag)
      ? -1
      : 0
  );
