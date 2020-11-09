import { type } from "os";

export type idea = {
  title: string;
  description: string;
  likes: string;
  source: string;
  tags: string[];
};

export type collection = ReadonlyArray<idea>;

export type predictionObject = {
  locale: string;
  utterance: string;
  languageGuessed: false;
  localeIso2: string;
  language: string;
  nluAnswer: {
    classifications: [[Object]];
    entities: undefined;
    explanation: undefined;
  };
  classifications: [{ intent: string; score: 1 }];
  intent: string;
  score: 1;
  entities: [];
  sourceEntities: [];
  answers: [];
  answer: undefined;
  actions: [];
  sentiment: {
    score: number;
    numWords: number;
    numHits: number;
    average: number;
    type: string;
    locale: string;
    vote: string;
  };
};
