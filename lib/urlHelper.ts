import { COLLECTION } from "../data/TITLE_AND_IDEA_ID";
const MAIN_PATH = "https://ar.socialab.com/challenges/hackatonpaenqn/idea/";

export const websiteExist = (title: string): boolean => {
  if (
    title === "404 error!" ||
    title === "These are our Challenges" ||
    title === "Estas son nuestras convocatorias"
  ) {
    return false; // Not such a website found!
  }
  return true;
};

export const getUrls = () => {
  let urls: string[] = [];
  COLLECTION.forEach((record) => {
    for (const property in record) {
      if (property === "idea") {
        urls.push(`${MAIN_PATH}${record[property]}`);
      }
    }
  });
  return urls;
};

/**
 * @deprecated
 */
export const proceduralUrlBuilder = (): string[] => {
  let genereted: string[] = [];
  for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 99; j++) {
      genereted.push(`${MAIN_PATH}132${i}${j}`);
    }
  }
  return genereted as string[];
};
