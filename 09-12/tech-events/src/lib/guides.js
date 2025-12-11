// lib/guides.js

export const guides = [
  {
    path: ["onboarding"],
    title: "Guida Onboarding",
    description: "Tutto quello che devi sapere per iniziare.",
    content: "Benvenuto nel team! Questa guida ti accompagnerà nei primi passi: setup ambiente, accesso ai repository, strumenti di comunicazione e best practice aziendali.",
  },
  {
    path: ["onboarding", "setup"],
    title: "Setup Ambiente",
    description: "Configurazione iniziale del tuo ambiente di sviluppo.",
    content: "Installa Node.js, Git, VS Code e le estensioni consigliate. Clona i repository principali e configura le variabili d'ambiente.",
  },
  {
    path: ["onboarding", "tools"],
    title: "Strumenti Interni",
    description: "Panoramica degli strumenti utilizzati dal team.",
    content: "Utilizziamo Slack per la comunicazione, Notion per la documentazione, GitHub per il versionamento e Vercel per il deploy.",
  },
  {
    path: ["react"],
    title: "Guida React",
    description: "Fondamenti e pattern di React.",
    content: "React è una libreria per costruire interfacce utente. Si basa su componenti riutilizzabili e un flusso di dati unidirezionale.",
  },
  {
    path: ["react", "hooks"],
    title: "React Hooks",
    description: "Introduzione agli hooks di React.",
    content: "Gli hooks permettono di usare state e altre funzionalità di React nei componenti funzionali. I principali sono useState, useEffect, useContext.",
  },
  {
    path: ["react", "hooks", "useState"],
    title: "useState",
    description: "Gestione dello stato locale nei componenti.",
    content: "useState restituisce un valore e una funzione per aggiornarlo. È il modo più semplice per gestire lo stato in un componente funzionale.",
  },
  {
    path: ["react", "hooks", "useEffect"],
    title: "useEffect",
    description: "Gestione degli effetti collaterali.",
    content: "useEffect permette di eseguire side effects come fetch di dati, sottoscrizioni o manipolazione del DOM dopo il render del componente.",
  },
  {
    path: ["react", "hooks", "useContext"],
    title: "useContext",
    description: "Accesso al Context senza Consumer.",
    content: "useContext permette di leggere il valore di un Context direttamente, evitando il pattern del Consumer component.",
  },
  {
    path: ["next"],
    title: "Guida Next.js",
    description: "Fondamenti di Next.js e App Router.",
    content: "Next.js è un framework React per applicazioni web. Offre routing file-based, rendering server-side e ottimizzazioni automatiche.",
  },
  {
    path: ["next", "app-router"],
    title: "App Router",
    description: "Il nuovo sistema di routing di Next.js.",
    content: "L'App Router usa la cartella app/ e supporta Server Components, nested layouts, loading states e error boundaries nativamente.",
  },
  {
    path: ["next", "app-router", "layouts"],
    title: "Layouts",
    description: "Creare layout persistenti e annidati.",
    content: "I layout in Next.js permettono di condividere UI tra pagine. Sono persistenti durante la navigazione e possono essere annidati.",
  },
  {
    path: ["next", "app-router", "dynamic-routes"],
    title: "Route Dinamiche",
    description: "Creare pagine con parametri dinamici.",
    content: "Usa [slug] per parametri singoli, [...slug] per catch-all e [[...slug]] per catch-all opzionali. I params sono disponibili come props.",
  },
  {
    path: ["next", "app-router", "metadata"],
    title: "Metadata & SEO",
    description: "Gestione dei metadata per SEO.",
    content: "Esporta un oggetto metadata o una funzione generateMetadata per definire title, description, open graph e altre meta informazioni.",
  },
];

// Utility per trovare una guida dal path
export function getGuideByPath(pathArray) {
  return guides.find((guide) => guide.path.length === pathArray.length && guide.path.every((segment, index) => segment === pathArray[index]));
}

// Utility per ottenere le guide figlie di un path
export function getChildGuides(pathArray) {
  return guides.filter((guide) => guide.path.length === pathArray.length + 1 && pathArray.every((segment, index) => guide.path[index] === segment));
}

// Utility per generare i path statici
export function getAllGuidePaths() {
  return guides.map((guide) => ({
    path: guide.path,
  }));
}
