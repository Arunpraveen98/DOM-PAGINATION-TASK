var description = document.createElement("p");
description.setAttribute("id", "description");
description.innerText =
  "Pagination is the method of separating digital content into different pages on a website. Users can navigate between these pages by clicking links.";

//----------------------------------------------------------------

var container = ele("div", "class", "container");
var maindiv = ele("div", "id", "main-div");
var navbar = ele("nav", "id", "nav-bar");
var title = ele("h1", "id", "title");
title.innerHTML = "DOM-Pagination task :";

function ele(tagname, attname, attvalue) {
  var element = document.createElement(tagname);
  element.setAttribute(attname, attvalue);
  return element;
}

//----------------------------------------------------------------
var content_div = document.createElement("div");
content_div.setAttribute("id", "buttons");
content_div.setAttribute("class", "d-flex justify-content-center");

//----------------------------------------------------------------

var ul_list = document.createElement("ul");
ul_list.classList.add("pagination", "justify-content-center");
ul_list.setAttribute("id", "ul-list");

//----------------------------------------------------------------

var list_pre = lists("li");
var list_first = lists("li");
//--
var list_1 = lists("li");
var list_2 = lists("li");
var list_3 = lists("li");
var list_4 = lists("li");
var list_5 = lists("li");
var list_6 = lists("li");
//--
var list_last = lists("li");
var list_next = lists("li");

function lists(tagname) {
  var lists = document.createElement(tagname);
  return lists;
}

//----------------------------------------------------------------

var btn_pre = btnele(
  "button",
  "type",
  "button",
  "btn",
  "btn-outline-primary",
  "id",
  "event-btn-pre",
  "⏪Previous"
);
var btn_first = btnele(
  "button",
  "type",
  "button",
  "btn",
  "btn-outline-primary",
  "id",
  "event-btn-first",
  "First"
);

var btn_last = btnele(
  "button",
  "type",
  "button",
  "btn",
  "btn-outline-primary",
  "id",
  "event-btn-last",
  "Last"
);
var btn_next = btnele(
  "button",
  "type",
  "button",
  "btn",
  "btn-outline-primary",
  "id",
  "event-btn-next",
  "Next⏩"
);

var btn_1 = btnele(
  "button",
  "type",
  "button",
  "btn",
  "btn-outline-primary",
  "id",
  "event-btn-1",
  "1"
);
var btn_2 = btnele(
  "button",
  "type",
  "button",
  "btn",
  "btn-outline-primary",
  "id",
  "event-btn-2",
  "2"
);
var btn_3 = btnele(
  "button",
  "type",
  "button",
  "btn",
  "btn-outline-primary",
  "id",
  "event-btn-3",
  "3"
);
var btn_4 = btnele(
  "button",
  "type",
  "button",
  "btn",
  "btn-outline-primary",
  "id",
  "event-btn-4",
  "4"
);
var btn_5 = btnele(
  "button",
  "type",
  "button",
  "btn",
  "btn-outline-primary",
  "id",
  "event-btn-5",
  "5"
);
var btn_6 = btnele(
  "button",
  "type",
  "button",
  "btn",
  "btn-outline-primary",
  "id",
  "event-btn-6",
  "6"
);

function btnele(
  tagname,
  attname1,
  attvalue1,
  class1,
  class2,
  attname2,
  attvalue2,
  contenttext
) {
  var button = document.createElement(tagname);
  button.setAttribute(attname1, attvalue1);
  button.classList.add(class1, class2);
  button.setAttribute(attname2, attvalue2);
  button.innerHTML = contenttext;
  return button;
}

//----------------------------------------------------------------

var table_div = createtable("div");
table_div.setAttribute("class", "table-responsive");

var table_tag = createtable("table");
table_tag.classList.add("table", "table-bordered");

var table_body = createtable("tbody");
table_body.setAttribute("id", "t-body");

var table_head = createtable("thead");
table_head.setAttribute("id", "table-head");
var table_tr = createtable("tr");

var table_th1 = createtable("th");
table_th1.innerText = "Id";

var table_th2 = createtable("th");
table_th2.innerText = "Name";

var table_th3 = createtable("th");
table_th3.innerText = "Email";

// var table_tr1 = createtable("tr");
// var table_td1 = createtable("td");
// table_td1.innerText = "1";
// var table_td2 = createtable("td");
// table_td2.innerText = "ARUN PRAVEEN R";
// var table_td3 = createtable("td");
// table_td3.innerText = "abc@gmail.com";

function createtable(taganme) {
  var elements = document.createElement(taganme);
  return elements;
}
//--------------------------------------------------------------

async function paginationData() {
  var res = await fetch(
    "https://raw.githubusercontent.com/Rajavasanthan/jsondata/master/pagenation.json"
  );
  var JsonFormat = await res.json();
  // console.log(JsonFormat);
  try {
    var namearr = [];
    var emailarr = [];
    var idarr = [];
    for (var i = 0; i < 36; i++) {
      var name = JsonFormat[i].name;
      namearr.push(name);
      // console.log(name);
      var Email = JsonFormat[i].email;
      emailarr.push(Email);
      // console.log(Email);
      var id = JsonFormat[i].id;
      idarr.push(id);
      // console.log(id);
    }
    
    for (var k = 0; k < 6; k++) {
      passData(`${idarr[k]}`, `${emailarr[k]}`, `${namearr[k]}`);
    }

   
  } catch (error) {
    console.log(error);
  }
}
paginationData();
//-----------------------------------------------------------------
//eventListener First add:-
function passData(a, b, c) {
  var addEvent = document.getElementById("event-btn-first");
  addEvent.addEventListener("click", eventButtonFirst(a, b, c));
}

function eventButtonFirst(idData, emailData, nameData) {
  var row = document.createElement("tr");
  var td1 = document.createElement("td");
  td1.innerHTML = `${idData}`;
  var td2 = document.createElement("td");
  td2.innerHTML = `${emailData}`;
  var td3 = document.createElement("td");
  td3.innerHTML = `${nameData}`;
  table_body.append(row);
  row.append(td1, td2, td3);
}

//---------------------------------------------------------------
// //eventListener 1 add:-
// function passData(a, b, c) {
//   var addEvent = document.getElementById("event-btn-first");
//   addEvent.addEventListener("click", eventButtonFirst(a, b, c));
// }

// function eventButtonFirst(idData, emailData, nameData) {
//   var row = document.createElement("tr");
//   var td1 = document.createElement("td");
//   td1.innerHTML = `${idData}`;
//   var td2 = document.createElement("td");
//   td2.innerHTML = `${emailData}`;
//   var td3 = document.createElement("td");
//   td3.innerHTML = `${nameData}`;
//   table_body.append(row);
//   row.append(td1, td2, td3);
// }

// //---------------------------------------------------------------
// //eventListener 2 add:-
// function passData(a, b, c) {
//   var addEvent = document.getElementById("event-btn-first");
//   addEvent.addEventListener("click", eventButtonFirst(a, b, c));
// }

// function eventButtonFirst(idData, emailData, nameData) {
//   var row = document.createElement("tr");
//   var td1 = document.createElement("td");
//   td1.innerHTML = `${idData}`;
//   var td2 = document.createElement("td");
//   td2.innerHTML = `${emailData}`;
//   var td3 = document.createElement("td");
//   td3.innerHTML = `${nameData}`;
//   table_body.append(row);
//   row.append(td1, td2, td3);
// }

// //---------------------------------------------------------------
// //eventListener 3 add:-
// function passData(a, b, c) {
//   var addEvent = document.getElementById("event-btn-first");
//   addEvent.addEventListener("click", eventButtonFirst(a, b, c));
// }

// function eventButtonFirst(idData, emailData, nameData) {
//   var row = document.createElement("tr");
//   var td1 = document.createElement("td");
//   td1.innerHTML = `${idData}`;
//   var td2 = document.createElement("td");
//   td2.innerHTML = `${emailData}`;
//   var td3 = document.createElement("td");
//   td3.innerHTML = `${nameData}`;
//   table_body.append(row);
//   row.append(td1, td2, td3);
// }

// //---------------------------------------------------------------
// //eventListener 4  add:-
// function passData(a, b, c) {
//   var addEvent = document.getElementById("event-btn-first");
//   addEvent.addEventListener("click", eventButtonFirst(a, b, c));
// }

// function eventButtonFirst(idData, emailData, nameData) {
//   var row = document.createElement("tr");
//   var td1 = document.createElement("td");
//   td1.innerHTML = `${idData}`;
//   var td2 = document.createElement("td");
//   td2.innerHTML = `${emailData}`;
//   var td3 = document.createElement("td");
//   td3.innerHTML = `${nameData}`;
//   table_body.append(row);
//   row.append(td1, td2, td3);
// }

// //---------------------------------------------------------------
// //eventListener 5  add:-
// function passData(a, b, c) {
//   var addEvent = document.getElementById("event-btn-first");
//   addEvent.addEventListener("click", eventButtonFirst(a, b, c));
// }

// function eventButtonFirst(idData, emailData, nameData) {
//   var row = document.createElement("tr");
//   var td1 = document.createElement("td");
//   td1.innerHTML = `${idData}`;
//   var td2 = document.createElement("td");
//   td2.innerHTML = `${emailData}`;
//   var td3 = document.createElement("td");
//   td3.innerHTML = `${nameData}`;
//   table_body.append(row);
//   row.append(td1, td2, td3);
// }

// //---------------------------------------------------------------

//*appending....

document.body.append(container);
container.append(maindiv);
maindiv.append(title, description, content_div, table_div);
content_div.append(navbar);
navbar.append(ul_list);

//---------------------------------------------------------------

ul_list.append(
  list_pre,
  list_first,
  list_1,
  list_2,
  list_3,
  list_4,
  list_5,
  list_6,
  list_next,
  list_last
);
list_pre.append(btn_pre);

list_first.append(btn_first);

list_1.appendChild(btn_1);
list_2.appendChild(btn_2);
list_3.appendChild(btn_3);
list_4.appendChild(btn_4);
list_5.appendChild(btn_5);
list_6.appendChild(btn_6);

list_last.append(btn_last);

list_next.append(btn_next);

//----------------------------------------------------------------

table_div.append(table_tag);
table_tag.append(table_head, table_body);
table_head.append(table_tr);

table_tr.append(table_th1, table_th2, table_th3);
