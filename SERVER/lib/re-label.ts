import { getAugmentedData } from "./createAugmentedData";
import { COLLECTION_OF_IDEAS_FROM_HACKATHON_PAE } from "../data/COLLECTION_OF_IDEAS_FROM_HACKATHON_PAE";
import type { collection, idea, predictionObject } from "../utils/types";

const { containerBootstrap } = require("@nlpjs/core");
const { Nlp } = require("@nlpjs/nlp");
const { LangEs } = require("@nlpjs/lang-es");
const natural = require("natural");
const container = containerBootstrap();
container.use(Nlp);
container.use(LangEs);
const nlp = container.get("nlp");
nlp.settings.autoSave = false;
nlp.addLanguage("es");

const naturalClassifier = new natural.BayesClassifier();

const trainWith = (
  model: any = naturalClassifier,
  dataSet: string = "dev-set",
  iterations: number = 5
): void => {
  let i = 0;
  let data;
  dataSet === "augmented-data"
    ? (data = getAugmentedData())
    : (data = COLLECTION_OF_IDEAS_FROM_HACKATHON_PAE);

  while (i < iterations) {
    i++;
    data.forEach((record: idea) => {
      const { description, tags } = record;
      //nlp requieres languaje as its first argument
      model.addDocument(description, tags);
    });
  }
  model.train();
};

const testCLassifier = (model: any = naturalClassifier) => {
  console.info(
    model,
    `-- Expected output of already labeled data: ecología
${model.classify(
  "Nuestro equipo propone un proyecto en el cual vamos a incentivar el reciclado de los residuos a través de medios digitales. Usaremos una app interactiva la cuál tendrá funciones que motivarán al reciclado. Las personas separaran los residuos y los depositarán en iglús, los cuales nosotros recogeremos, acoplaremos en centros verdes y  realizaremos  procesos de reciclado. Se realizarán procesos artesanales por cada material que se reciba en la planta. Logrando con estos, productos que luego serán comercializados y entregados a la gente como premios por reciclar a través de la app."
)}`
  );

  console.info(
    model,
    `-- Expected output of unlabeled data: ecología
  ${model.classify(
    "El proyecto Archiblox una casa modular ecológica y prefabricada que generan más energía que la que consumen. La eficiencia energética de la vivienda se logra aprovechando todos los recursos posibles de la construcción prefabricada, el uso de ventanas de doble acristalamiento, paneles solares, accesorios de uso eficiente del agua, aprovechamiento de la luz casi al 100 así como unas paredes diseñadas para mejorar el rendimiento de su envolvente térmica."
  )}`
  );
};

const asyncTraining = async (
  model: any = nlp,
  db: collection = COLLECTION_OF_IDEAS_FROM_HACKATHON_PAE
) => {
  db.forEach((record: idea) => {
    const { description, tags } = record;
    model.addDocument("es", description, tags);
  });
  await model.train();
};

// asyncTraining();

const asyncPredcitWith = async (model: any = nlp, input: string) => {
  const prediction: predictionObject = await model.process("es", input);
  return prediction;
};
////no hay que entrenar con dev pero tengo pcoos datos. hay que entrenar con la disytibucion
//training que seria la db entera.
//dev es a lo que quiero apuntar. y va a funcionar para los próximos hackatones

export const reLabelUsingNLP = async (db: collection) => {
  // const mappedDB =

  db.map(async (record: any) => {
    const { description } = record;
    const prediction: predictionObject = await asyncPredcitWith(
      nlp,
      description
    );
    const info = { info: prediction };
    //@ts-ignore
    // const newRecord = [...record, ...info];
    console.info(info);
  });
  // return Promise.all(mappedDB).then((db) => console.log(db));
};
// Use callback
setTimeout(() => {
  reLabelUsingNLP(COLLECTION_OF_IDEAS_FROM_HACKATHON_PAE);
}, 5000);
