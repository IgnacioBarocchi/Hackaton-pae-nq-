export const sortByLikes = (array: any) => {
  return [...array].sort((a: { likes: string }, b: { likes: string }) =>
    parseInt(a.likes) < parseInt(b.likes)
      ? 1
      : parseInt(b.likes) < parseInt(a.likes)
      ? -1
      : 0
  );
};

export const sortByTag = (array: any, tag: string) => {
  return [
    ...array,
  ].sort(
    (
      a: { tags: { includes: (arg0: string) => number } },
      b: { tags: { includes: (arg0: string) => number } }
    ) =>
      a.tags.includes(tag) < b.tags.includes(tag)
        ? 1
        : b.tags.includes(tag) < a.tags.includes(tag)
        ? -1
        : 0
  );
};
