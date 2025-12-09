import Link from "next/link";

const prodotti = [
  // Elettronica
  { id: "01", categoria: "elettronica", nome: "Laptop Pro", prezzo: "999€", descrizione: "Laptop potente per professionisti" },
  { id: "02", categoria: "elettronica", nome: "Smartphone X", prezzo: "699€", descrizione: "Smartphone di ultima generazione" },
  { id: "03", categoria: "elettronica", nome: "Tablet Air", prezzo: "549€", descrizione: "Tablet leggero e versatile" },
  { id: "04", categoria: "elettronica", nome: "Cuffie Wireless", prezzo: "199€", descrizione: "Audio di qualità senza fili" },
  { id: "05", categoria: "elettronica", nome: "Smart Watch", prezzo: "299€", descrizione: "Orologio intelligente multifunzione" },

  // Abbigliamento
  { id: "01", categoria: "abbigliamento", nome: "T-Shirt Basic", prezzo: "29€", descrizione: "Maglietta in cotone 100%" },
  { id: "02", categoria: "abbigliamento", nome: "Jeans Slim", prezzo: "79€", descrizione: "Jeans aderenti stile moderno" },
  { id: "03", categoria: "abbigliamento", nome: "Felpa Hoodie", prezzo: "59€", descrizione: "Felpa con cappuccio comoda" },
  { id: "04", categoria: "abbigliamento", nome: "Giacca Invernale", prezzo: "149€", descrizione: "Giacca calda per l'inverno" },
  { id: "05", categoria: "abbigliamento", nome: "Sneakers Urban", prezzo: "89€", descrizione: "Scarpe sportive urban style" },

  // Casa
  { id: "01", categoria: "casa", nome: "Lampada LED", prezzo: "45€", descrizione: "Illuminazione a basso consumo" },
  { id: "02", categoria: "casa", nome: "Set Pentole", prezzo: "129€", descrizione: "Set completo per la cucina" },
  { id: "03", categoria: "casa", nome: "Aspirapolvere Robot", prezzo: "349€", descrizione: "Pulizia automatica intelligente" },
  { id: "04", categoria: "casa", nome: "Tappeto Moderno", prezzo: "99€", descrizione: "Design contemporaneo" },
  { id: "05", categoria: "casa", nome: "Macchina Caffè", prezzo: "179€", descrizione: "Espresso come al bar" },

  // Sport
  { id: "01", categoria: "sport", nome: "Tapis Roulant", prezzo: "599€", descrizione: "Corsa indoor professionale" },
  { id: "02", categoria: "sport", nome: "Manubri Set", prezzo: "89€", descrizione: "Set pesi per home gym" },
  { id: "03", categoria: "sport", nome: "Tappetino Yoga", prezzo: "35€", descrizione: "Antiscivolo e confortevole" },
  { id: "04", categoria: "sport", nome: "Bicicletta MTB", prezzo: "449€", descrizione: "Mountain bike per ogni terreno" },
  { id: "05", categoria: "sport", nome: "Zaino Trekking", prezzo: "79€", descrizione: "Capiente e impermeabile" },
];

export default function ShopPage() {
  return (
    <div>
      {prodotti.map((prodotto) => (
        <div key={`${prodotto.categoria}-${prodotto.id}`} style={{ border: "1px solid #ccc", borderRadius: "8px", padding: "16px", margin: "16px 0" }}>
          <h2>{prodotto.nome}</h2>
          <p>{prodotto.descrizione}</p>
          <p>
            <strong>Prezzo:</strong> {prodotto.prezzo}
          </p>
          <Link href={`/shop/${prodotto.categoria}/${prodotto.id}`} style={{ color: "#2563eb", textDecoration: "none" }}>
            {`Dettagli di ${prodotto.nome} →`}
          </Link>
        </div>
      ))}
    </div>
  );
}
