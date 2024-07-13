let btn = document.getElementById("btn");
let btnClose = document.getElementById("btn-2");
let info = document.getElementById("info");

btn.addEventListener("click", () => {
    info.classList.remove("hidden");
    setTimeout(() => {
        info.classList.remove("opacity-0");
        info.classList.add("opacity-100");
    }, 0);
    btn.classList.add("hidden");
    btnClose.classList.remove("hidden");
});

btnClose.addEventListener("click", () => {
    info.classList.remove("opacity-100");
    info.classList.add("opacity-0");
    setTimeout(() => {
        info.classList.add("hidden");
    }, 500);
    btn.classList.remove("hidden");
    btnClose.classList.add("hidden");
});
