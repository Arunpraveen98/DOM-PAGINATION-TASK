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

//----------------------------------------------------------------

var list_pre = lists("li");
var list_first = lists("li");
//--
var list_2 = lists("li");
var list_3 = lists("li");
var list_4 = lists("li");
var list_5 = lists("li");
var list_6 = lists("li");
var list_7 = lists("li");
//--
var list_last = lists("li");
var list_next = lists("li");

function lists(tagname) {
  var lists = document.createElement(tagname);
  return lists;
}

//----------------------------------------------------------------
var atag_pre = anchortags("a", "class", "btn-atag", "href", "#");
var atag_first = anchortags("a", "class", "btn-atag", "href", "#");
var atag_last = anchortags("a", "class", "btn-atag", "href", "#");
var atag_next = anchortags("a", "class", "btn-atag", "href", "#");

function anchortags(tagname, attname1, attvalue1, attname2, attvalue2) {
  var atags = document.createElement(tagname);
  atags.setAttribute(attname1, attvalue1);
  atags.setAttribute(attname2, attvalue2);
  return atags;
}

//----------------------------------------------------------------
var btn_pre = btnele("button", "id", "button", "⏪Previous");
var btn_first = btnele("button", "id", "button", "First");
var btn_last = btnele("button", "id", "button", "Last");
var btn_next = btnele("button", "id", "button", "Next⏩");

function btnele(tagname, attname, attvalue, contenttext) {
  var button = document.createElement(tagname);
  button.setAttribute(attname, attvalue);
  button.innerHTML = contenttext;
  return button;
}

//----------------------------------------------------------------

var atag_3 = anchortag("a", "class", "page-link", "href", "#", "1");
var atag_4 = anchortag("a", "class", "page-link", "href", "#", "2");
var atag_5 = anchortag("a", "class", "page-link", "href", "#", "3");
var atag_6 = anchortag("a", "class", "page-link", "href", "#", "4");
var atag_7 = anchortag("a", "class", "page-link", "href", "#", "5");
var atag_8 = anchortag("a", "class", "page-link", "href", "#", "6");

function anchortag(
  tagname,
  attname1,
  attvalue1,
  attname2,
  attvalue2,
  contenttext
) {
  var atag = document.createElement(tagname);
  atag.setAttribute(attname1, attvalue1);
  atag.setAttribute(attname2, attvalue2);
  atag.innerHTML = contenttext;
  return atag;
}

//----------------------------------------------------------------
var table_div = createtable("div");
table_div.setAttribute("class", "table-responsive");

var table_tag = createtable("table");
table_tag.classList.add("table", "table-bordered");

var table_body = createtable("tbody");

var table_head = createtable("thead");
table_head.setAttribute("id","table-head");
var table_tr = createtable("tr");

var table_th1 = createtable("th");
table_th1.innerText = "Id";

var table_th2 = createtable("th");
table_th2.innerText = "Name";

var table_th3 = createtable("th");
table_th3.innerText = "Email";

var table_tr1 = createtable("tr");
var table_td1 = createtable("td");
table_td1.innerText = "1";
var table_td2 = createtable("td");
table_td2.innerText = "ARUN PRAVEEN R";
var table_td3 = createtable("td");
table_td3.innerText = "abc@gmail.com";

function createtable(taganme) {
  var elements = document.createElement(taganme);
  return elements;
}

//---------------------------------------------------------------

//appending....

document.body.append(container);
container.append(maindiv);
maindiv.append(title, description, content_div, table_div);
content_div.append(navbar);
navbar.append(ul_list);

//---------------------------------------------------------------

ul_list.append(
  list_pre,
  list_first,
  list_2,
  list_3,
  list_4,
  list_5,
  list_6,
  list_7,
  list_next,
  list_last
);
list_pre.append(atag_pre);
atag_pre.append(btn_pre);
list_first.append(atag_first);
atag_first.append(btn_first);

list_2.appendChild(atag_3);
list_3.appendChild(atag_4);
list_4.appendChild(atag_5);
list_5.appendChild(atag_6);
list_6.appendChild(atag_7);
list_7.appendChild(atag_8);

list_last.append(atag_last);
atag_last.append(btn_last);
list_next.append(atag_next);
atag_next.append(btn_next);

//----------------------------------------------------------------

table_div.append(table_tag);
table_tag.append(table_head, table_body);
table_head.append(table_tr);

table_tr.append(table_th1, table_th2, table_th3);

//----------------------------------------------------------------

//Events--


