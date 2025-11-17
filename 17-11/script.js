let giorno = "sabato";

switch (giorno) {
  case "lunedì":
    console.log("Odio il lunedì");
    break;
  case "martedì":
    console.log("È solo martedì...");
    break;
  case "venerdì":
    console.log("Weekend in arrivo!");
    break;
  default:
    console.log("Giorno non riconosciuto");
}

let mese = 21;

switch (mese) {
  case 1:
    console.log("Gennaio");
    break;
  case 2:
    console.log("Febbraio");
    break;
  case 3:
    console.log("Marzo");
    break;
  case 4:
    console.log("Aprile");
    break;
  case 5:
    console.log("Maggio");
    break;
  case 6:
    console.log("Giugno");
    break;
  case 7:
    console.log("Luglio");
    break;
  case 8:
    console.log("Agosto");
    break;
  case 9:
    console.log("Settembre");
    break;
  case 10:
    console.log("Ottobre");
    break;
  case 11:
    console.log("Novembre");
    break;
  case 12:
    console.log("Dicembre");
    break;
  default:
    console.log("Mese non riconosciuto");
}

// Operatori logici
let isStudente = true;
let haEsami = true;
let eta = 17;

if (!isStudente || !haEsami || eta > 18) {
  console.log("Studia!");
} else {
  console.log("Goditi la vita!");
}

// funzioni con parametri predefiniti
function saluta(nome = "ospite") {
  console.log("Ciao " + nome);
}

saluta("Mario");
saluta();

function addizione(a = 0, b = 0, c = 0, d = 0) {
  return a + b + c + d;
}

console.log(addizione(10, 25));

// Return con Oggetti

function datiPersona() {
  return {
    nome: "Anna",
    eta: 25,
    lavoro: "developer",
  };
}

let Anna = datiPersona();

console.log(Anna.nome);
console.log(Anna.eta);
console.log(Anna.lavoro);

//Arrow Functions
const somma = (a, b) => a + b;
console.log(somma(5, 10));

function moltiplica(a, b) {
  return a * b;
}

const moltiplicaArrow = (a, b) => a * b;

//This in Arrow Functions e in Funzioni Normali

function outerNormal() {
  console.log("outerNormal this:", this);

  function innerNormal() {
    console.log("innerNormal this:", this);
  }

  innerNormal();
}

outerNormal();

function outerArrow() {
  console.log("outerArrow this:", this);

  const innerArrow = () => {
    console.log("innerArrow this:", this);
  };

  innerArrow();
}
outerArrow();

//

function Counter() {
  this.value = 0;

  // Funzione normale annidata
  function increaseNormal() {
    this.value++;
    console.log("Normal this.value:", this.value);
  }

  // Arrow function annidata
  const increaseArrow = () => {
    this.value++;
    console.log("Arrow this.value:", this.value);
  };

  // Chiamate
  increaseNormal(); // ❌ this non è Counter
  increaseArrow(); // ✅ this è Counter
}

const counter = new Counter();
console.log("Final counter.value:", counter.value);

//

const saluta2 = (nome, cognome) => console.log("Ciao " + nome + " " + cognome);

const quadrato = (num) => Number(num) * Number(num);

console.log(quadrato("5"));

// Truthy e Falsy

if ("") {
  console.log("Truthy"); // viene stampato
} else {
  console.log("Falsy");
}

//For...of

let colori = ["rosso", "verde", "blu"];

for (let colore of colori) {
  console.log(colore);
}

// For...in

let persona = { nome: "Luca", eta: 30, lavoro: "insegnante" };

for (let chiave in persona) {
  console.log(chiave + ": " + persona[chiave]);
}
