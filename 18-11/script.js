console.log(document);
const main = document.querySelector("main");
console.log(main);
console.log("Elemento successivo:", main.nextElementSibling);
console.log("Elemento precedente:", main.previousElementSibling);
console.log("Genitore:", main.parentElement);
console.log("Tutti i figli:", main.children);
const tuttiLi = document.getElementsByTagName("li");
console.log("Tutti gli <li>:", tuttiLi.length);
const primoParagrafo = document.querySelector("p");
console.log("Primo paragrafo:", primoParagrafo);
const lista = document.getElementById("lista-elementi");
console.log("Lista elementi:", lista);
for (let attr of lista.attributes) {
  console.log(`${attr.name}: ${attr.value}`);
}
console.log(lista.attributes.length);
const elementoDataId2 = document.querySelector('[data-id="2"]');
console.log("Elemento trovato:", elementoDataId2.textContent);
console.log("Elemento trovato:", elementoDataId2.innerHTML);
const primoDiv = document.querySelector("div");
console.log("Primo <div>:", primoDiv);
const intro = document.querySelector(".intro");
console.log("Intro:", intro);
const contenuto = document.querySelector("#contenuto");
console.log("Contenuto:", contenuto);
const allLi = document.querySelectorAll("li");
console.log("Tutti gli <li> con querySelectorAll:", allLi);
for (const li of allLi) {
  console.log("Singolo <li>:", li.textContent);
}

const primoLinkMenu = document.querySelector(".menu li a");
console.log("Primo link nel menu:", primoLinkMenu);
