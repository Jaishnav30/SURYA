"use strict";
// EVENT LISTENERS---------------------------------------------------------------------------
const button = document.querySelector("#btn");
const heading = document.querySelector("#title");
function syHi() {
    console.log("heyy wassup!!");
}
button?.addEventListener("click", syHi);
//or
//button?.addEventListener("click", () => { console.log("heyy wassup!!") });
button?.addEventListener("click", () => { heading.textContent = "button clicked"; });
button?.addEventListener("click", (event) => { console.log(event); }); //event object has many properties
button?.addEventListener("click", (event) => { console.log(event.target); });
button?.addEventListener("click", (event) => { console.log(event.currentTarget); });
button?.addEventListener("click", (event) => {
    console.log(event.clientX);
    console.log(event.clientY);
});
const input = document.querySelector("#name");
// input?.addEventListener("keydown", (event) => {console.log(event);});
// input?.addEventListener("keydown", (event) => {console.log(event.key);});
input?.addEventListener("input", () => { console.log(input.value); });
