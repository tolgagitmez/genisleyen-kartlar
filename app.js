const panel = document.querySelectorAll(".panel");

panel.forEach( panel => {
    panel.addEventListener("mouseover", () => {
        removeActive();
        panel.classList.add("active");
    })
})

function removeActive(){
    panel.forEach(panel => {
        panel.classList.remove("active");
    })
}