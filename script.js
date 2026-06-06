// botão para mudar o idioma, alternando entre inglês e português.

let english = false;

const languageButton = document.getElementById("idioma");

languageButton.addEventListener("click", () => {

    english = !english;

    const elements = document.querySelectorAll("[data-pt]");

    elements.forEach(element => {

        element.textContent = english
            ? element.dataset.en
            : element.dataset.pt;

    });

});

 