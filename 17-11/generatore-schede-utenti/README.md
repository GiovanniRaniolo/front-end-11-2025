# 🎯 Generatore di Schede Utente - Windows 98 Edition

Una mini-app in **HTML + JavaScript** che gestisce schede utente con validazione, classificazione e visualizzazione dinamica, il tutto con un'interfaccia retrò stile Windows 98!

---

## 📋 Indice

1. [Struttura del Progetto](#struttura-del-progetto)
2. [Requisiti Implementati](#requisiti-implementati)
3. [Spiegazione Passo per Passo](#spiegazione-passo-per-passo)
4. [Come Utilizzare l'App](#come-utilizzare-lapp)
5. [Concetti JavaScript Utilizzati](#concetti-javascript-utilizzati)

---

## 📁 Struttura del Progetto

```
generatore-schede-utenti/
│
├── index.html       # Struttura HTML della pagina
├── style.css        # Stile Windows 98 retrò
├── script.js        # Logica JavaScript
└── README.md        # Questo file
```

---

## ✅ Requisiti Implementati

### 🧱 1. Struttura HTML

- ✅ Campo **Nome** (input text)
- ✅ Campo **Età** (input number)
- ✅ Campo **Professione** (input text)
- ✅ Bottone **Aggiungi utente**
- ✅ Bottone **Filtra maggiorenni** (extra)
- ✅ `<div id="lista">` per visualizzare gli utenti
- ✅ CSS esterno in file separato con stile Windows 98

### 🧠 2. Validazione Dati

- ✅ Controllo nome vuoto → `console.error()`
- ✅ Controllo età non valida → `console.warn()`
- ✅ Uso di **truthy/falsy** per la validazione
- ✅ **Operatori logici** (`||`, `&&`)

### 🎭 3. Classificazione con Switch

- ✅ Switch statement per classificare la professione
- ✅ Categorie: studente, developer, designer, altro
- ✅ Uso di `toLowerCase()` per uniformare l'input

### 📦 4. Salvataggio in Array

- ✅ Array globale `let utenti = []`
- ✅ Ogni utente salvato come **oggetto** con proprietà: nome, eta, professione, categoria

### 🧮 5. Funzioni Richieste

- ✅ **7 funzioni** totali (di cui 2 arrow function)
- ✅ `creaUtente()` con **default parameter**
- ✅ Arrow function `generaMessaggio()`
- ✅ Arrow function `filtraMaggiorenni()`
- ✅ `mostraUtenti()` con manipolazione DOM
- ✅ `debugUtenti()` con console.table e for...in
- ✅ `aggiungiUtente()` per gestire l'inserimento
- ✅ `mostraFiltro()` per visualizzare liste filtrate

### 🔧 6. Concetti JavaScript

- ✅ **Template literals** per stringhe dinamiche
- ✅ **for...of** per iterare sull'array utenti
- ✅ **for...in** per iterare sulle proprietà degli oggetti
- ✅ **console.log/warn/error/table** per debugging
- ✅ **Scope** dimostrato con variabile locale
- ✅ **Event listeners** per i bottoni
- ✅ **Manipolazione DOM** con getElementById e innerHTML

---

## 🎓 Spiegazione Passo per Passo

### 📌 PASSO 1: Array Globale

```javascript
let utenti = [];
```

**Cosa fa:** Crea un array vuoto accessibile da tutte le funzioni per salvare gli utenti.

**Perché:** Serve uno **scope globale** per mantenere i dati tra diverse chiamate di funzione.

---

### 📌 PASSO 2: Funzione `creaUtente()` con Default Parameter

```javascript
function creaUtente(nome, eta, professione = "non specificata") {
  console.log("📝 Creazione nuovo utente...");

  let categoria;

  switch (professione.toLowerCase()) {
    case "studente":
      categoria = "studente";
      break;
    case "developer":
    case "programmatore":
    case "sviluppatore":
      categoria = "developer";
      break;
    case "designer":
    case "grafico":
      categoria = "designer";
      break;
    default:
      categoria = "altro";
  }

  return {
    nome: nome,
    eta: eta,
    professione: professione,
    categoria: categoria,
  };
}
```

**Cosa fa:**

1. Accetta 3 parametri (professione ha valore di default)
2. Usa uno **switch statement** per classificare l'utente
3. `toLowerCase()` rende la classificazione case-insensitive
4. Restituisce un **oggetto** con tutte le proprietà

**Concetti utilizzati:**

- ✅ **Default parameter**: `professione = "non specificata"`
- ✅ **Switch statement** per la classificazione
- ✅ **Oggetto** come valore di ritorno

---

### 📌 PASSO 3: Arrow Function `generaMessaggio()`

```javascript
const generaMessaggio = (utente) => {
  return `${utente.nome} ha ${utente.eta} anni ed è classificato come ${utente.categoria}`;
};
```

**Cosa fa:** Crea una stringa descrittiva usando i dati dell'utente.

**Concetti utilizzati:**

- ✅ **Arrow function** (sintassi `=>`)
- ✅ **Template literals** con `${variabile}`
- ✅ Accesso alle proprietà dell'oggetto con dot notation

---

### 📌 PASSO 4: Funzione `mostraUtenti()`

```javascript
function mostraUtenti() {
  console.log("🎨 Aggiornamento lista utenti...");

  const lista = document.getElementById("lista");
  lista.innerHTML = "";

  if (!utenti.length) {
    lista.innerHTML = '<div class="empty-state">Nessun utente presente...</div>';
    return;
  }

  for (const utente of utenti) {
    const messaggio = generaMessaggio(utente);

    const userHTML = `
            <div class="user-card">
                <h3>👤 ${utente.nome}</h3>
                <p><strong>Età:</strong> ${utente.eta} anni</p>
                <p><strong>Professione:</strong> ${utente.professione}</p>
                <p><strong>Messaggio:</strong> ${messaggio}</p>
                <span class="categoria ${utente.categoria}">${utente.categoria.toUpperCase()}</span>
            </div>
        `;

    lista.innerHTML += userHTML;
  }
}
```

**Cosa fa:**

1. Seleziona il div con `getElementById()`
2. Svuota il contenuto con `innerHTML = ""`
3. Controlla se l'array è vuoto con **truthy/falsy** (`!utenti.length`)
4. Usa **for...of** per iterare sull'array
5. Crea HTML dinamico con **template literals**
6. Aggiorna il DOM

**Concetti utilizzati:**

- ✅ **Manipolazione DOM** (getElementById, innerHTML)
- ✅ **Truthy/falsy** (`!utenti.length`)
- ✅ **for...of** per iterare sull'array
- ✅ **Template literals** per HTML dinamico

---

### 📌 PASSO 5: Funzione `debugUtenti()`

```javascript
function debugUtenti() {
  console.log("🐛 DEBUG: Inizio analisi utenti...");

  console.table(utenti);

  for (const index in utenti) {
    console.log(`--- Utente #${parseInt(index) + 1} ---`);
    const utente = utenti[index];

    for (const proprieta in utente) {
      console.log(`${proprieta}: ${utente[proprieta]}`);
    }
  }

  console.log("✅ DEBUG completato!");
}
```

**Cosa fa:**

1. Mostra l'intero array con `console.table()`
2. Usa **for...in** per iterare sugli indici dell'array
3. Usa un secondo **for...in** per iterare sulle proprietà di ogni oggetto
4. Stampa ogni proprietà nella console

**Concetti utilizzati:**

- ✅ **console.table()** per visualizzare array/oggetti
- ✅ **for...in** per iterare su indici/proprietà
- ✅ **Template literals**
- ✅ Accesso dinamico alle proprietà con `utente[proprieta]`

---

### 📌 PASSO 6: Funzione `aggiungiUtente()` - VALIDAZIONE

```javascript
function aggiungiUtente() {
  console.log("🚀 Tentativo di aggiungere un nuovo utente...");

  // Ottieni i valori dagli input
  const inputNome = document.getElementById("nome");
  const inputEta = document.getElementById("eta");
  const inputProfessione = document.getElementById("professione");

  const nome = inputNome.value.trim();
  const eta = parseInt(inputEta.value);
  const professione = inputProfessione.value.trim();

  // VALIDAZIONE
  if (!nome) {
    console.error("❌ ERRORE: Nome mancante!");
    alert("Per favore, inserisci il nome!");
    return;
  }

  if (!eta || eta <= 0 || isNaN(eta)) {
    console.warn("⚠️ ATTENZIONE: Età non valida");
    alert("Per favore, inserisci un'età valida!");
    return;
  }

  console.log("✅ Validazione superata!");

  // SCOPE - variabile locale
  let messaggio = "Utente aggiunto!";
  console.log(`📢 ${messaggio}`);

  // Crea e salva l'utente
  const nuovoUtente = creaUtente(nome, eta, professione);
  utenti.push(nuovoUtente);

  console.log("✅ Utente aggiunto con successo:", nuovoUtente);

  // Aggiorna visualizzazione
  mostraUtenti();
  debugUtenti();

  // Pulisci i campi
  inputNome.value = "";
  inputEta.value = "";
  inputProfessione.value = "";

  alert(`${messaggio}\n${generaMessaggio(nuovoUtente)}`);
}
```

**Cosa fa:**

1. Legge i valori dagli input DOM
2. Usa `trim()` per rimuovere spazi
3. **Valida** i dati con if/else
4. Usa **truthy/falsy** per controllare se i valori esistono
5. Usa **operatori logici** (`||`, `&&`)
6. Chiama `console.error()` e `console.warn()` per errori
7. Dimostra lo **scope** con variabile locale `messaggio`
8. Crea l'utente, lo salva nell'array e aggiorna il DOM

**Concetti utilizzati:**

- ✅ **Manipolazione DOM** (getElementById, value)
- ✅ **If/else** per controllo flusso
- ✅ **Truthy/falsy** (`!nome`)
- ✅ **Operatori logici** (`||`)
- ✅ **console.error() / console.warn()**
- ✅ **Scope locale** (variabile `messaggio`)
- ✅ **Array.push()** per aggiungere elementi

---

### 📌 PASSO 7: Arrow Function `filtraMaggiorenni()` - EXTRA

```javascript
const filtraMaggiorenni = () => {
  console.log("🔍 Filtro maggiorenni attivato...");

  const maggiorenni = utenti.filter((utente) => utente.eta >= 18);

  if (maggiorenni.length === 0) {
    console.warn("⚠️ Nessun maggiorenne trovato!");
    alert("Non ci sono utenti maggiorenni nella lista.");
    return;
  }

  console.log(`✅ Trovati ${maggiorenni.length} maggiorenni`);
  console.table(maggiorenni);

  mostraFiltro(maggiorenni);
};
```

**Cosa fa:**

1. Usa `filter()` con una **arrow function** per filtrare
2. Controlla se ci sono risultati
3. Mostra la lista filtrata

**Concetti utilizzati:**

- ✅ **Arrow function** (principale e nella callback)
- ✅ **Array.filter()** per filtrare elementi
- ✅ **Arrow function** come callback: `utente => utente.eta >= 18`
- ✅ **console.table()**

---

### 📌 PASSO 8: Event Listeners

```javascript
document.getElementById("btnAggiungi").addEventListener("click", aggiungiUtente);

document.getElementById("btnFiltra").addEventListener("click", filtraMaggiorenni);

document.getElementById("professione").addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    aggiungiUtente();
  }
});
```

**Cosa fa:**

1. Collega i bottoni alle funzioni
2. Aggiunge listener per il tasto Enter
3. Usa una **arrow function** come callback

**Concetti utilizzati:**

- ✅ **addEventListener()**
- ✅ **Arrow function** come callback
- ✅ **Event object** per controllare il tasto premuto

---

### 📌 PASSO 9: Dimostrazione dello Scope

```javascript
function aggiungiUtente() {
  // ... codice ...

  let messaggio = "Utente aggiunto!";
  console.log(`📢 ${messaggio}`); // ✅ Funziona qui

  // ... codice ...
}

// ❌ Questo genererebbe un errore se decommentato:
// console.log(messaggio); // ReferenceError: messaggio is not defined
```

**Cosa dimostra:** La variabile `messaggio` è **locale** alla funzione e non è accessibile all'esterno (**function scope**).

---

## 🎮 Come Utilizzare l'App

1. **Apri** `index.html` nel browser
2. **Compila** i campi Nome, Età e Professione
3. **Clicca** "Aggiungi utente" o premi Enter
4. **Visualizza** l'utente aggiunto nella lista
5. **Clicca** "Filtra maggiorenni" per vedere solo utenti >= 18 anni
6. **Apri** la Console del browser (F12) per vedere i log di debug

---

## 🧠 Concetti JavaScript Utilizzati

### ✅ Variabili e Scope

- `let` per variabili locali e globali
- `const` per variabili costanti
- **Scope globale** (array `utenti`)
- **Scope di funzione** (variabile `messaggio`)

### ✅ Funzioni

- **Funzioni classiche**: `function nome() {}`
- **Arrow functions**: `const nome = () => {}`
- **Default parameters**: `professione = "non specificata"`
- **Return** di oggetti

### ✅ Strutture di Controllo

- **If/else** per validazione
- **Switch** per classificazione
- **Operatori logici**: `||`, `&&`
- **Truthy/falsy**: `!nome`, `!utenti.length`

### ✅ Array e Oggetti

- **Array** per salvare dati: `let utenti = []`
- **Oggetti** per strutturare dati: `{nome, eta, professione, categoria}`
- **Array.push()** per aggiungere elementi
- **Array.filter()** per filtrare elementi

### ✅ Cicli

- **for...of** per iterare su array
- **for...in** per iterare su proprietà/indici

### ✅ Template Literals

- Sintassi: `` `testo ${variabile}` ``
- Usati per stringhe dinamiche e HTML

### ✅ Manipolazione DOM

- **document.getElementById()** per selezionare elementi
- **innerHTML** per modificare contenuto
- **value** per leggere/scrivere input
- **addEventListener()** per gestire eventi

### ✅ Debugging

- **console.log()** per messaggi generici
- **console.error()** per errori
- **console.warn()** per avvisi
- **console.table()** per visualizzare array/oggetti

### ✅ Metodi String

- **trim()** per rimuovere spazi
- **toLowerCase()** per uniformare il testo
- **toUpperCase()** per maiuscole

---

## 🎨 Stile Windows 98

Il CSS ricrea fedelmente l'estetica di Windows 98:

- **Colori**: grigio sistema (#c0c0c0), teal (#008080), blu Windows (#000080)
- **Bordi 3D**: effetto rialzato/abbassato
- **Font**: MS Sans Serif
- **Bottoni**: effetto "premuto" al click
- **Barra titolo**: gradiente blu classico
- **Scrollbar**: stile Windows 98 (webkit)

---

## 📊 Riepilogo Funzioni

| Funzione              | Tipo     | Scopo                                        |
| --------------------- | -------- | -------------------------------------------- |
| `creaUtente()`        | Classica | Crea oggetto utente + classificazione switch |
| `generaMessaggio()`   | Arrow    | Genera stringa descrittiva                   |
| `mostraUtenti()`      | Classica | Visualizza tutti gli utenti                  |
| `debugUtenti()`       | Classica | Debug con console.table e for...in           |
| `aggiungiUtente()`    | Classica | Gestisce inserimento e validazione           |
| `filtraMaggiorenni()` | Arrow    | Filtra utenti >= 18 anni                     |
| `mostraFiltro()`      | Classica | Visualizza lista filtrata                    |

---

## 🎯 Obiettivi Raggiunti

- ✅ Almeno **6 funzioni** (ne abbiamo 7!)
- ✅ Almeno **2 arrow functions** (ne abbiamo 3!)
- ✅ **Switch** per classificazione
- ✅ **If/else** per validazione
- ✅ **Truthy/falsy** per controlli
- ✅ **Operatori logici**
- ✅ **for...of** e **for...in**
- ✅ **Array + oggetti**
- ✅ **Template literals**
- ✅ **Default parameters**
- ✅ **console.log/error/warn/table**
- ✅ **Manipolazione DOM**
- ✅ **Scope** dimostrato
- ✅ **EXTRA**: Filtro maggiorenni
- ✅ **EXTRA**: Stile Windows 98 retrò

---

## 🚀 Possibili Miglioramenti Futuri

- [ ] LocalStorage per salvare i dati
- [ ] Pulsante per eliminare singoli utenti
- [ ] Modifica utenti esistenti
- [ ] Ordinamento per nome/età
- [ ] Ricerca utenti
- [ ] Statistiche (età media, professione più comune)
- [ ] Esportazione dati in JSON
- [ ] Animazioni stile Windows 98 (finestre che si aprono)

---

## 📚 Risorse Utili

- [MDN - JavaScript](https://developer.mozilla.org/it/docs/Web/JavaScript)
- [MDN - DOM Manipulation](https://developer.mozilla.org/it/docs/Web/API/Document_Object_Model)
- [MDN - Arrow Functions](https://developer.mozilla.org/it/docs/Web/JavaScript/Reference/Functions/Arrow_functions)
- [MDN - Template Literals](https://developer.mozilla.org/it/docs/Web/JavaScript/Reference/Template_literals)

---

**Progetto completato il:** 17 Novembre 2025  
**Tecnologie:** HTML5, CSS3, JavaScript ES6+  
**Stile:** Windows 98 Retro Edition 💾

---

## 👨‍💻 Autore

Realizzato come progetto didattico per imparare JavaScript base e manipolazione DOM.

**Buon coding!** 🚀✨
