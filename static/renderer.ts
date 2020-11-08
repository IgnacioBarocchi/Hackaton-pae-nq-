import { COLLECTION_OF_IDEAS_FROM_HACKATHON_PAE } from "../data/COLLECTION_OF_IDEAS_FROM_HACKATHON_PAE";
import type { idea, collection } from "../utils/types";

const $ = document.querySelector.bind(document);

/**
 * @TODO
 * Remove those two sorting methods and put them in other files
 * to create 2 more documents since the data won't change anymore
 */

const sortByLikes = (array: any) => {
  return [...array].sort((a: { likes: string }, b: { likes: string }) =>
    parseInt(a.likes) < parseInt(b.likes)
      ? 1
      : parseInt(b.likes) < parseInt(a.likes)
      ? -1
      : 0
  );
};

const sortByTag = (array: any, tag: string) => {
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

const LIKES = sortByLikes(COLLECTION_OF_IDEAS_FROM_HACKATHON_PAE),
  ECOLOGIA = sortByTag(LIKES, "ecología"),
  TRANSPORTE = sortByTag(LIKES, "transporte"),
  INCLUSION = sortByTag(LIKES, "inclusíon"),
  ECONOMIA = sortByTag(LIKES, "economía"),
  MEDICINA = sortByTag(LIKES, "medicina");

// LIST

let app: HTMLElement | null = $("#app");
//@ts-ignore
let tbody: HTMLTableElement | null = document.getElementById("tbody");

const clearList = () => {
  let first = app!.firstElementChild;
  while (first) {
    first.remove();
    first = app!.firstElementChild;
  }
};

const cleanTable = () => {
  let breakLoop = false;
  while (tbody!.rows.length > 1 && !breakLoop) {
    tbody!.deleteRow(1);
    if (tbody!.rows.length === 1) {
      breakLoop = true;
    }
  }
};

const getNodesFrom = (array: collection) => {
  //@ts-ignore
  let nodes: HTMLLIElement[] = array.map((post: idea) => {
    let post_ = post;
    const { title, description, likes, source, tags } = post_;
    const content: string = `<div><h3>${title}</h3></div>
    <strong>${likes}<span style="color: Crimson;"> ❤</span></strong>
     <h4>Descripción:</h4>
     <p>${description}</p>
     <div style="display: flex; flex-direction: column">
     <strong>Tags: <span style="
     margin-bottom:5px;
     color: #24292e;
     padding: 2px;
     border-radius: 30px;
     border: 1px solid #d1d5da;
     background-color: #f6f8fa;
     border-radius: 6px;
     -webkit-border-radius: 6px;
     -moz-border-radius: 6px;
     -ms-border-radius: 6px;
     -o-border-radius: 6px;">#${
       !tags || tags.length === 0 ? tags : `${tags.join(" #")}`
     }</span></strong>
     <span><strong>Fuente:</strong> <a href="${source}">${source}</a></span>
     </div>`;
    let li = document.createElement("li");
    li.classList.add("box");
    li.classList.add("app-list-element");
    li.innerHTML = content;
    return li;
  });
  return nodes;
};
const NODES_FROM_LIKES = getNodesFrom(LIKES),
  NODES_FROM_ECOLOGIA = getNodesFrom(ECOLOGIA),
  NODES_FROM_TRANSPORTE = getNodesFrom(TRANSPORTE),
  NODES_FROM_INCLUSION = getNodesFrom(INCLUSION),
  NODES_FROM_ECONOMIA = getNodesFrom(ECONOMIA),
  NODES_FROM_MEDICINA = getNodesFrom(MEDICINA),
  NODES_FROM_COLLECTION_OF_IDEAS_FROM_HACKATHON_PAE = getNodesFrom(
    COLLECTION_OF_IDEAS_FROM_HACKATHON_PAE
  );

app!.append(...NODES_FROM_COLLECTION_OF_IDEAS_FROM_HACKATHON_PAE);

// LIST EVENTS

const elementsToBeMapped: {
  id: string;
  array: HTMLLIElement[];
}[] = [
  {
    id: "#most-recent",
    array: NODES_FROM_COLLECTION_OF_IDEAS_FROM_HACKATHON_PAE,
  },
  { id: "#most-liked", array: NODES_FROM_LIKES },
  { id: "#ecología", array: NODES_FROM_ECOLOGIA },
  { id: "#medicina", array: NODES_FROM_MEDICINA },
  { id: "#transporte", array: NODES_FROM_TRANSPORTE },
  { id: "#inclusión", array: NODES_FROM_INCLUSION },
  { id: "#economía", array: NODES_FROM_ECONOMIA },
];

elementsToBeMapped.map((element: any) => {
  $(element!.id).onclick = () => {
    clearList();
    app!.append(...element.array);
  };
});

// TABLE

const getTop = (num: number = 5) => {
  for (let i = 0; i < num; i++) {
    let tr = "<tr>";
    tr += `<td>${LIKES[i].title}</td><td>${LIKES[i].likes}</td><td>${LIKES[i].tags}</td></tr>`;
    tbody!.innerHTML += tr;
  }
};
getTop();

//@ts-ignore
$(".input-number")?.addEventListener("change", (e: Event) => {
  const target = e.target as HTMLTextAreaElement;
  cleanTable();
  getTop(parseInt(target.value));
});

// CHART

const count = (selectedTag: string) => {
  let count: number = 0;
  for (const record of COLLECTION_OF_IDEAS_FROM_HACKATHON_PAE) {
    const { tags } = record;
    const mainTag = tags[0];
    if (selectedTag === mainTag) {
      count++;
    }
  }
  return count;
};

const proyectCanvas = $("#proyectCanvas");
//@ts-ignore
Chart.defaults.global.defaultFontSize = 18;
const Temas = {
  label: "Cantidad de proyectos",
  data: [
    count("economía"),
    count("ecología"),
    count("medicina"),
    count("transporte"),
    count("inclusión"),
  ],
};
//@ts-ignore
const barChart = new Chart(proyectCanvas, {
  type: "bar",
  data: {
    labels: ["Economía", "Ecología", "Medicina", "Transporte", "Inclusión"],
    datasets: [Temas],
  },
});

// TIME

const today = new Date();

const date = `${today.getDate()}/${
  today.getMonth() + 1
}/${today.getFullYear()}`;

const time = `${today.getHours()}:${today.getMinutes()}:${today.getSeconds()}`;

//@ts-ignore
$("#date").innerHTML = `Actualizado el ${date} a las ${time}`;
