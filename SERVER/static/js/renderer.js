"use strict";
var __spreadArrays =
  (this && this.__spreadArrays) ||
  function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++)
      s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
      for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
        r[k] = a[j];
    return r;
  };
var _a;
var _b;
var COLLECTION_OF_IDEAS_FROM_HACKATHON_PAE_1 = COLLECTION_OF_IDEAS_FROM_HACKATHON_PAE;
var $ = document.querySelector.bind(document);
/**
 * @TODO
 * Remove those two sorting methods and put them in other files
 * to create 2 more documents since the data won't change anymore
 */
var sortByLikes = function (array) {
  return __spreadArrays(array).sort(function (a, b) {
    return parseInt(a.likes) < parseInt(b.likes)
      ? 1
      : parseInt(b.likes) < parseInt(a.likes)
      ? -1
      : 0;
  });
};
var sortByTag = function (array, tag) {
  return __spreadArrays(array).sort(function (a, b) {
    return a.tags.includes(tag) < b.tags.includes(tag)
      ? 1
      : b.tags.includes(tag) < a.tags.includes(tag)
      ? -1
      : 0;
  });
};
var LIKES = sortByLikes(COLLECTION_OF_IDEAS_FROM_HACKATHON_PAE_1),
  ECOLOGIA = sortByTag(LIKES, "ecología"),
  TRANSPORTE = sortByTag(LIKES, "transporte"),
  INCLUSION = sortByTag(LIKES, "inclusíon"),
  ECONOMIA = sortByTag(LIKES, "economía"),
  MEDICINA = sortByTag(LIKES, "medicina");
// LIST
var app = $("#app");
//@ts-ignore
var tbody = document.getElementById("tbody");
var clearList = function () {
  var first = app.firstElementChild;
  while (first) {
    first.remove();
    first = app.firstElementChild;
  }
};
var cleanTable = function () {
  var breakLoop = false;
  while (tbody.rows.length > 1 && !breakLoop) {
    tbody.deleteRow(1);
    if (tbody.rows.length === 1) {
      breakLoop = true;
    }
  }
};
var getNodesFrom = function (array) {
  //@ts-ignore
  var nodes = array.map(function (post) {
    var post_ = post;
    var title = post_.title,
      description = post_.description,
      likes = post_.likes,
      source = post_.source,
      tags = post_.tags;
    var content =
      "<div><h3>" +
      title +
      "</h3></div>\n    <strong>" +
      likes +
      '<span style="color: Crimson;"> \u2764</span></strong>\n     <h4>Descripci\u00F3n:</h4>\n     <p>' +
      description +
      '</p>\n     <div style="display: flex; flex-direction: column">\n     <strong>Tags: <span style="\n     margin-bottom:5px;\n     color: #24292e;\n     padding: 2px;\n     border-radius: 30px;\n     border: 1px solid #d1d5da;\n     background-color: #f6f8fa;\n     border-radius: 6px;\n     -webkit-border-radius: 6px;\n     -moz-border-radius: 6px;\n     -ms-border-radius: 6px;\n     -o-border-radius: 6px;">#' +
      (!tags || tags.length === 0 ? tags : "" + tags.join(" #")) +
      '</span></strong>\n     <span><strong>Fuente:</strong> <a href="' +
      source +
      '">' +
      source +
      "</a></span>\n     </div>";
    var li = document.createElement("li");
    li.classList.add("box");
    li.classList.add("app-list-element");
    li.innerHTML = content;
    return li;
  });
  return nodes;
};
var NODES_FROM_LIKES = getNodesFrom(LIKES),
  NODES_FROM_ECOLOGIA = getNodesFrom(ECOLOGIA),
  NODES_FROM_TRANSPORTE = getNodesFrom(TRANSPORTE),
  NODES_FROM_INCLUSION = getNodesFrom(INCLUSION),
  NODES_FROM_ECONOMIA = getNodesFrom(ECONOMIA),
  NODES_FROM_MEDICINA = getNodesFrom(MEDICINA),
  NODES_FROM_COLLECTION_OF_IDEAS_FROM_HACKATHON_PAE = getNodesFrom(
    COLLECTION_OF_IDEAS_FROM_HACKATHON_PAE_1
  );
(_a = app).append.apply(_a, NODES_FROM_COLLECTION_OF_IDEAS_FROM_HACKATHON_PAE);
// LIST EVENTS
var elementsToBeMapped = [
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
elementsToBeMapped.map(function (element) {
  $(element.id).onclick = function () {
    var _a;
    clearList();
    (_a = app).append.apply(_a, element.array);
  };
});
// TABLE
var getTop = function (num) {
  if (num === void 0) {
    num = 5;
  }
  for (var i = 0; i < num; i++) {
    var tr = "<tr>";
    tr +=
      "<td>" +
      LIKES[i].title +
      "</td><td>" +
      LIKES[i].likes +
      "</td><td>" +
      LIKES[i].tags +
      "</td></tr>";
    tbody.innerHTML += tr;
  }
};
getTop();
//@ts-ignore
(_b = $(".input-number")) === null || _b === void 0
  ? void 0
  : _b.addEventListener("change", function (e) {
      var target = e.target;
      cleanTable();
      getTop(parseInt(target.value));
    });
// CHART
var count = function (selectedTag) {
  var count = 0;
  for (
    var _i = 0,
      COLLECTION_OF_IDEAS_FROM_HACKATHON_PAE_2 = COLLECTION_OF_IDEAS_FROM_HACKATHON_PAE_1;
    _i < COLLECTION_OF_IDEAS_FROM_HACKATHON_PAE_2.length;
    _i++
  ) {
    var record = COLLECTION_OF_IDEAS_FROM_HACKATHON_PAE_2[_i];
    var tags = record.tags;
    var mainTag = tags[0];
    if (selectedTag === mainTag) {
      count++;
    }
  }
  return count;
};
var proyectCanvas = $("#proyectCanvas");
//@ts-ignore
Chart.defaults.global.defaultFontSize = 18;
var Temas = {
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
var barChart = new Chart(proyectCanvas, {
  type: "bar",
  data: {
    labels: ["Economía", "Ecología", "Medicina", "Transporte", "Inclusión"],
    datasets: [Temas],
  },
});
// TIME
var today = new Date();
var date =
  today.getDate() + "/" + (today.getMonth() + 1) + "/" + today.getFullYear();
var time =
  today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
//@ts-ignore
$("#date").innerHTML = "Actualizado el " + date + " a las " + time;
