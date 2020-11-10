import { getUrls } from './lib/urlHelper';
import { request } from './lib/request';
import fs from 'fs';
import type { idea } from './utils/types';
import { labelThisDocument } from '././lib/labeler';
// No ES module => fix this
const console = require('better-console');

const urls: string[] = getUrls();
const FILENAME = 'COLLECTION_OF_IDEAS_FROM_HACKATHON_PAE.ts';
const LOGSTREAM = fs.createWriteStream(FILENAME, { flags: 'a' });
LOGSTREAM.write(`
import type { collection } from "./utils/types";
export const COLLECTION_OF_IDEAS_FROM_HACKATHON_PAE: collection = [`);

const appendFile = (
  FILENAME: string,
  content: string,
  postTitle: string
) => {
  fs.appendFile(FILENAME, content, (err) => {
    if (err) return console.log(err);
    console.info(`Record: "${postTitle.toUpperCase()}" saved!`);
  });
};

urls.forEach(async (url: string) => {
  const idea: idea = labelThisDocument(await request(url));
  console.log(idea);
  appendFile(FILENAME, JSON.stringify(idea) + ',', idea.title);
});

process.on('exit', function () {
  LOGSTREAM.end(`]
  `);
  console.warn('The database has been created.');
});
