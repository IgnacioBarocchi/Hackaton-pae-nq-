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
> - `boolVal: boolean,`
> - `tags: string[],` _(en caso de no contar con los tags se etiquetarán con un algoritmo)_
> - `sentiment:{ score: number; comparative: number; vote: string; numWords: number; numHits: number; type: string; language: string;},`
> - `source/url: string,`
> - `postCreatedAt: timestamp,`
> - `postUpdatedAt: timestamp,`
