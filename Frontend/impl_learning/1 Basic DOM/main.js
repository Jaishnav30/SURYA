"use strict";
// const paragraphs =
// document.querySelectorAll(".info");
// console.log(paragraphs);
// paragraphs.forEach((p) => {
//     console.log(p);
// });
// const items = document.getElementsByClassName("info");
// console.log(items[1]);
// BASIC DOM selectors----------------------------------------------------------------------
const title = document.querySelector("#title");
const p = document.querySelector("#desc");
const un = document.querySelector("#username");
const btn = document.querySelector("#btn");
title.textContent = "something else";
p.innerHTML = "<b>BOLD</b> not bold";
console.log(un.getAttribute("value"));
title.classList.add("abc");
title.style.color = "red";
un.setAttribute("data-role", "student");
console.log(un.getAttribute("data-role"));
// EVENT LISTENERS---------------------------------------------------------------------------
