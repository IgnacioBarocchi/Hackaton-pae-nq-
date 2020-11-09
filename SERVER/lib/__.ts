import { getAugmentedData } from "./createAugmentedData";
import { COLLECTION_OF_IDEAS_FROM_HACKATHON_PAE } from "../data/COLLECTION_OF_IDEAS_FROM_HACKATHON_PAE";
import type { idea, collection } from "../utils/types";

const { containerBootstrap } = require("@nlpjs/core");
const { Nlp } = require("@nlpjs/nlp");
const { LangEs } = require("@nlpjs/lang-es");
const natural = require("natural");
const container = containerBootstrap();
const nlp = container.get("nlp");
const naturalClassifier = new natural.BayesClassifier();

container.use(Nlp);
container.use(LangEs);
nlp.settings.autoSave = false;
nlp.addLanguage("es");

const trainWith = (
  model: any,
  dataSet: string = "dev-set",
  iterations: number
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

trainWith(naturalClassifier, "dev-set", 8);
// trainWith(naturalClassifier, "augmented-data", 8);

/**
 * @todo
 * Decoupling.
 */
const asyncPredcitWith = async (model: any, input: string, db: collection) => {
  db.forEach((record: idea) => {
    const { description, tags } = record;
    model.addDocument("es", description, tags);
  });
  await model.train();
  const prediction = await model.process("es", input);
  console.log(prediction);
  return prediction;
};

asyncPredcitWith(
  nlp,
  "Nuestro equipo propone un proyecto en el cual vamos a incentivar el reciclado de los residuos a través de medios digitales. Usaremos una app interactiva la cuál tendrá funciones que motivarán al reciclado. Las personas separaran los residuos y los depositarán en iglús, los cuales nosotros recogeremos, acoplaremos en centros verdes y  realizaremos  procesos de reciclado. Se realizarán procesos artesanales por cada material que se reciba en la planta. Logrando con estos, productos que luego serán comercializados y entregados a la gente como premios por reciclar a través de la app.",
  COLLECTION_OF_IDEAS_FROM_HACKATHON_PAE
);

const testCLassifier = (model: any) => {
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
