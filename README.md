# REQUERIMIENTOS

## Debe tener

#### 1. Hacer un scraper que extraiga todos los datos de interés de la página.

> - urls de las ediciones de todos los hackatones de argentina.
> - buscar si los posteos tienen tags de su temática.
> - con las urls obtenidas se hará scraping sobre todos los proyectos de las >distintas ediciones.
> - \*se salvará cada proyecto en una base de datos NoSQL (mongo o firebase) >-durante su extracción, procesamiento y sanitizado/normalización.
> - **El modelo de los posteos será el siguiente:**
> - `id: int @autoincrement/@generated (_id),`
> - `description: string,`
> - `deliverables: {any}[] (pensar mejor),`
> - `likes: int,`
> - `postedBy: string,`
> - `imageUrl: string,`
> - `tags: string[],` _(en caso de no contar con los tags se etiquetarán con un algoritmo)_
> - `sentiment:{ score: number; comparative: number; vote: string; numWords: number; numHits: number; type: string; language: string;},`
> - `source/url: string,`
> - `postCreatedAt: timestamp,`
> - `postUpdatedAt: timestamp,`

> _(todos los campos serán requeridos excepto el de imagenUrl. También se usarán { timestamps: true } propias en caso de no poder contar con la hora del post original. Esto agilizará las peticiones asincrónicas ya que la hora real de carga del post no es un dato muy importante)_

#### 1.2. Si no se pueden acceder a los tags de las temáticas:

> - Mejorar el modelo de NLP para evitar el `under/over-fitting`.
> - Mejorar el conste del algoritmo de etiquetado usando un hash table.

```TypeScript
// labeler.ts
export const labelThisDocument = (record: idea) => {
  const keywords: string[] = Object.keys(LABELS);
  for (const keyword of keywords) {
    const description: string[] = normalize(record.description).split(" ");
    if (description.includes(keyword) && !record.tags.includes(keyword)) {
      //@ts-ignore
      record.tags.push(LABELS[keyword]);
    }
  }
  return record;
};
```

> - Hacer una calificación ponderada de los tags. Ordenarlos según su importancia en el array.
> - Hacer un for in desde i = 0 hasta el length del array de etiquetas de >mayor tamaño para poder iterar todos los arrays de etiquetas a la vez. => >hacer breaks del loop en los arrays que no sean el de mayor tamaño.

#### 1.3 Hacerle `google dorking` a la página

#### 2. Hacer un api para comprimir las imágenes obtenidas y subirlas a cloudinary.

#### 3. Migrar el front a react basado en funciones. Hacer el responsive design.

```TypeScript
// renderer.ts
// LIST RENDER
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
```

```TypeScript
// renderer.ts
// TABLE RENDER

const getTop = (num: number = 5) => {
  for (let i = 0; i < num; i++) {
    let tr = "<tr>";
    tr += `<td>${LIKES[i].title}</td><td>${LIKES[i].likes}</td><td>${LIKES[i].tags}</td></tr>`;
    tbody!.innerHTML += tr;
  }
};
getTop();

```

#### 4. Organizar las apis para hacer el backend.

#### 5. Hacer un api para elegir que hackaton mostrarle al cliente y que indique cual es su proyecto.

#### 6. Hacer muchas apis (pensar mucho). La api de update de la base de datos me va a costar un montón hacerla mmmm. Hay que saber cuáles son los hackatones sujetos a cambios en momento en el que el cliente usar la página.

... Crear un `procfile` para TypeScript y subir el backend a Heroku.
... El cliente debe poder:

- Obtener estadísticas con corto tiempo de actualización.
- Ordenar por fecha de actualización, likes, tags y entregables terminados.
- Consultar toda la información que necesite de manera rápida con una barra de busqueda. Los resultados de la hackaton en el que el cliente participa no deben estar paginados.

## Sería bueno que tenga

# Hackaton-pae-nq-
