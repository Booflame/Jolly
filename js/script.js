const btn = document.querySelector(".burger");
const nav = document.querySelector("nav");

btn.addEventListener("click", function() {
    const visible = nav.getAttribute("data-visible");

    if (visible === "false") {
        nav.setAttribute("data-visible", true);
        btn.setAttribute("aria-expanded", true);
    } else if (visible === "true") {
        nav.setAttribute("data-visible", false);
        btn.setAttribute("aria-expanded", false);
    }
});