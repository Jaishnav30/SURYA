"use strict";
const tasks = document.querySelector("#tasks");
tasks?.addEventListener("click", (event) => {
    const item = event.target;
    console.log(item);
    item.classList.toggle("done");
});
