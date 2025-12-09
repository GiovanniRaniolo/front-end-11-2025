const prodotti = {
  elettronica: {
    "01": { nome: "Laptop Pro", prezzo: "999€" },
    "02": { nome: "Smartphone X", prezzo: "699€" },
    "03": { nome: "Tablet Air", prezzo: "549€" },
    "04": { nome: "Cuffie Wireless", prezzo: "199€" },
    "05": { nome: "Smart Watch", prezzo: "299€" },
  },
  abbigliamento: {
    "01": { nome: "T-Shirt Basic", prezzo: "29€" },
    "02": { nome: "Jeans Slim", prezzo: "79€" },
    "03": { nome: "Felpa Hoodie", prezzo: "59€" },
    "04": { nome: "Giacca Invernale", prezzo: "149€" },
    "05": { nome: "Sneakers Urban", prezzo: "89€" },
  },
  casa: {
    "01": { nome: "Lampada LED", prezzo: "45€" },
    "02": { nome: "Set Pentole", prezzo: "129€" },
    "03": { nome: "Aspirapolvere Robot", prezzo: "349€" },
    "04": { nome: "Tappeto Moderno", prezzo: "99€" },
    "05": { nome: "Macchina Caffè", prezzo: "179€" },
  },
  sport: {
    "01": { nome: "Tapis Roulant", prezzo: "599€" },
    "02": { nome: "Manubri Set", prezzo: "89€" },
    "03": { nome: "Tappetino Yoga", prezzo: "35€" },
    "04": { nome: "Bicicletta MTB", prezzo: "449€" },
    "05": { nome: "Zaino Trekking", prezzo: "79€" },
  },
};

export default async function Prodotto({ params }) {
  const { category, id } = await params;
  const item = prodotti[category]?.[id];

  if (!item) return <p>Prodotto non trovato</p>;

  return (
    <div>
      <h1>{item.nome}</h1>
      <p>{item.prezzo}</p>
    </div>
  );
}
