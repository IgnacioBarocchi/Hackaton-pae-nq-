import { websiteExist } from "./urlHelper";
import cheerio from "cheerio";
import {idea } from "../utils/types";

const getTextFrom = (text: cheerio.Cheerio) => {
  return text
    .text()
    .trim()
    .replace(
      "¿Crees que esta idea es  positiva para el mundo?¿Crees que esta idea es  positiva para el mundo?ContenidosEnlacesAccesibilidad",
      ""
    )
    .replace(
      "Do you think this idea  is positive for the world?Do you think this idea  is positive for the world?ContentsLinksAccessibility",
      ""
    );
};

export const getPost = (responseText: string | void): idea => {
  if (!responseText)
    return { title: "", description: "", likes: "", source: "", tags:[]};
  const $html = cheerio.load(responseText)("html");
  const $h1 = getTextFrom($html.find("h1"));
  if (!websiteExist($h1))
    return { title: "", description: "", likes: "", source: "", tags:[] };

  let tempLikes: string[] = [];
  const $title = getTextFrom($html.find("h3"));
  const $idea = getTextFrom($html.find(".Idea-description"));
  let $source: string | undefined;
  $html.find(".Idea-meta-item").each((i: number, el: cheerio.Element) => {
    const item: string = cheerio.load(responseText)(el).text();
    tempLikes.push(item.trim());
  });

  $html.find("meta").each((i: number, el: cheerio.Element) => {
    if (i === 6 && cheerio.load(responseText)(el).attr("content")) {
      $source = cheerio.load(responseText)(el).attr("content");
      return;
    }
  });

  return {
    title: $title + "",
    description: $idea + "",
    likes: tempLikes[0].toString(),
    source: $source + "",
    tags: []
  };
};
