import Link from "next/link";

const prodotti = {
  elettronica: {
    "01": { nome: "Laptop Pro", prezzo: "999€", descrizione: "Laptop potente per professionisti" },
    "02": { nome: "Smartphone X", prezzo: "699€", descrizione: "Smartphone di ultima generazione" },
    "03": { nome: "Tablet Air", prezzo: "549€", descrizione: "Tablet leggero e versatile" },
    "04": { nome: "Cuffie Wireless", prezzo: "199€", descrizione: "Audio di qualità senza fili" },
    "05": { nome: "Smart Watch", prezzo: "299€", descrizione: "Orologio intelligente multifunzione" },
  },
  abbigliamento: {
    "01": { nome: "T-Shirt Basic", prezzo: "29€", descrizione: "Maglietta in cotone 100%" },
    "02": { nome: "Jeans Slim", prezzo: "79€", descrizione: "Jeans aderenti stile moderno" },
    "03": { nome: "Felpa Hoodie", prezzo: "59€", descrizione: "Felpa con cappuccio comoda" },
    "04": { nome: "Giacca Invernale", prezzo: "149€", descrizione: "Giacca calda per l'inverno" },
    "05": { nome: "Sneakers Urban", prezzo: "89€", descrizione: "Scarpe sportive urban style" },
  },
  casa: {
    "01": { nome: "Lampada LED", prezzo: "45€", descrizione: "Illuminazione a basso consumo" },
    "02": { nome: "Set Pentole", prezzo: "129€", descrizione: "Set completo per la cucina" },
    "03": { nome: "Aspirapolvere Robot", prezzo: "349€", descrizione: "Pulizia automatica intelligente" },
    "04": { nome: "Tappeto Moderno", prezzo: "99€", descrizione: "Design contemporaneo" },
    "05": { nome: "Macchina Caffè", prezzo: "179€", descrizione: "Espresso come al bar" },
  },
  sport: {
    "01": { nome: "Tapis Roulant", prezzo: "599€", descrizione: "Corsa indoor professionale" },
    "02": { nome: "Manubri Set", prezzo: "89€", descrizione: "Set pesi per home gym" },
    "03": { nome: "Tappetino Yoga", prezzo: "35€", descrizione: "Antiscivolo e confortevole" },
    "04": { nome: "Bicicletta MTB", prezzo: "449€", descrizione: "Mountain bike per ogni terreno" },
    "05": { nome: "Zaino Trekking", prezzo: "79€", descrizione: "Capiente e impermeabile" },
  },
};

const categorieMeta = {
  elettronica: { titolo: "Elettronica", emoji: "💻" },
  abbigliamento: { titolo: "Abbigliamento", emoji: "👕" },
  casa: { titolo: "Casa", emoji: "🏠" },
  sport: { titolo: "Sport", emoji: "⚽" },
};

export default async function CategoriaPage({ params }) {
  const { category } = await params;
  const prodottiCategoria = prodotti[category];
  const meta = categorieMeta[category];

  if (!prodottiCategoria) {
    return (
      <div style={{ padding: "20px", textAlign: "center" }}>
        <h1>Categoria non trovata</h1>
        <Link href="/shop">← Torna allo shop</Link>
      </div>
    );
  }

  return (
    <div style={{ padding: "20px" }}>
      <Link href="/shop" style={{ color: "#2563eb", textDecoration: "none" }}>
        ← Torna allo shop
      </Link>

      <h1 style={{ marginTop: "20px" }}>
        {meta.emoji} {meta.titolo}
      </h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
          gap: "20px",
          marginTop: "20px",
        }}
      >
        {Object.entries(prodottiCategoria).map(([id, prodotto]) => (
          <Link key={id} href={`/shop/${category}/${id}`} style={{ textDecoration: "none", color: "inherit" }}>
            <div
              style={{
                border: "1px solid #ddd",
                borderRadius: "8px",
                padding: "15px",
                transition: "box-shadow 0.3s",
                cursor: "pointer",
              }}
            >
              <h3 style={{ margin: "0 0 10px 0" }}>{prodotto.nome}</h3>
              <p style={{ color: "#666", fontSize: "14px", margin: "0 0 10px 0" }}>{prodotto.descrizione}</p>
              <p
                style={{
                  fontWeight: "bold",
                  color: "#2563eb",
                  fontSize: "18px",
                  margin: 0,
                }}
              >
                {prodotto.prezzo}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
