"use strict";
const list = document.querySelector("#tasks");
const li = document.createElement("li");
const btn = document.querySelector("#btn");
function addItem() {
    li.textContent = "Learn d";
    list?.append(li);
    console.log("added");
}
btn?.addEventListener("click", addItem);
