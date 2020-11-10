//oy = { ...o, ...{ sentiment: s } };
// const t =
//   "La propuesta consiste en la creación de una aplicación de celular con plataforma virtual para establecer vinculos entre empresas que cuenten ofertas laborales y los curriculum vitae de los postulantes, los cuales seran estudiantes y egresados de escuelas técnicas de nivel local, provincial con proyección nacional. Esta app generara ese puente del primer empleo en contexto de pandemia, facilitando las entrevistas y el ingreso al mundo del trabajo para disminuir la desocupación en los jóvenes técnicos profesionales.";
// const o: any = [...COLLECTION_OF_IDEAS_FROM_HACKATHON_PAE];
import { COLLECTION_OF_IDEAS_FROM_HACKATHON_PAE } from '../data/COLLECTION_OF_IDEAS_FROM_HACKATHON_PAE';

const { SentimentManager } = require('node-nlp');

const sentiment = new SentimentManager();

type sentiment = {
  score: number;
  comparative: number;
  vote: string;
  numWords: number;
  numHits: number;
  type: string;
  language: string;
};

COLLECTION_OF_IDEAS_FROM_HACKATHON_PAE.forEach((record) => {
  sentiment
    .process('es', record.description)
    .then((thisSentiment: sentiment) => {
      const newCol = {
        ...record,
        ...{ sentiment: thisSentiment },
      };
      // console.log(newCol);
    });
});
/*
const addSentiment = (record: any) => {
  sentiment
    .process("es", record.description)
    .then((thisSentiment: sentiment) => thisSentiment)
    .then((s: sentiment) => {
      const newCol = {
        ...record,
        ...{ sentiment: s },
      };
      return newCol;
    });
};
*/
