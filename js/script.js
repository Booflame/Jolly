// variable for burgermenu knappen
const btn = document.querySelector(".burger");
// variable for mine links
const links = document.querySelectorAll(".link");
// variable for min navigation
const nav = document.querySelector("nav");

// laver en klik funktion når man trykker på min burgermenu
btn.addEventListener("click", function() {
    // laver en variable for at tjekke dens værdi når man har trykket på burgermenuen
    const visible = nav.getAttribute("data-visible");
    
    // Hvis værdien af min visible variable er false ændre jeg den til true, jeg udnytter så attribut ændringen css til at få min nav frem med mine links
    if (visible === "false") {
        nav.setAttribute("data-visible", true);
        btn.setAttribute("aria-expanded", true);
    // jeg tjekker så her om min navigation er åben, og hvis den er det så lukker jeg min navigation ned.
    } else if (visible === "true") {
        nav.setAttribute("data-visible", false);
        btn.setAttribute("aria-expanded", false);
    }
});

// Siden jeg har flere links bliver jeg nød til at have dem i en liste så function kan ske for hvert enkle
// Mine links er også kun fremme når man har trykket på burgermenu knappen så funktionen opgave er kun at lukke min navigation og ikke åbne
links.forEach(function(i){
    i.addEventListener("click", function(){

        nav.setAttribute("data-visible", false);
        btn.setAttribute("aria-expanded", false);
    })
});