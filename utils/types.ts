export type idea = {
    title: string;
    description: string;
    likes: string;
    source: string;
    tags: string[];
  };
  
export type collection = ReadonlyArray<idea>;
  