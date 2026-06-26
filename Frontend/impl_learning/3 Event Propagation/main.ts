const tasks = document.querySelector<HTMLUListElement>("#tasks");

tasks?.addEventListener("click", (event) => {
    const item = event.target as HTMLElement;
    console.log(item);
    item.classList.toggle("done");
});