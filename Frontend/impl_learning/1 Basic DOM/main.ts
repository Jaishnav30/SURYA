// const paragraphs =
// document.querySelectorAll(".info");

// console.log(paragraphs);

// paragraphs.forEach((p) => {
//     console.log(p);
// });

// const items = document.getElementsByClassName("info");
// console.log(items[1]);

// BASIC DOM selectors----------------------------------------------------------------------
const title=document.querySelector<HTMLElement>("#title")
const p=document.querySelector<HTMLElement>("#desc")
const un=document.querySelector<HTMLElement>("#username")
const btn=document.querySelector<HTMLElement>("#btn")

title!.textContent="something else";
p!.innerHTML="<b>BOLD</b> not bold"
console.log(un!.getAttribute("value"));
title!.classList.add("abc");
title!.style.color = "red";
un!.setAttribute("data-role","student");
console.log(un!.getAttribute("data-role"));

// EVENT LISTENERS---------------------------------------------------------------------------
