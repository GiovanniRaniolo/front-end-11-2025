import { useState } from "react";

export default function PremiumContent() {
  const [userType, setUserType] = useState("free"); // 'free' o 'premium'

  return (
    <div>
      <h2>📚 Articolo del Giorno</h2>
      <p>Questo è l'inizio dell'articolo, visibile a tutti...</p>

      {/* Contenuto che appare solo agli utenti premium */}
      {userType === "premium" && (
        <div
          style={{
            border: "2px solid gold",
            padding: "15px",
            backgroundColor: "#fff3cd",
          }}
        >
          <h3>🌟 Contenuto Premium</h3>
          <p>Questa sezione è visibile solo agli utenti premium!</p>
          <p>Qui ci sono informazioni esclusive e dettagli avanzati...</p>
          <button onClick={() => setUserType("free")}>Torna a Free</button>
        </div>
      )}

      {/* Messaggio per utenti free */}
      {userType === "free" && (
        <div
          style={{
            border: "2px solid #ccc",
            padding: "15px",
            backgroundColor: "#f8f9fa",
          }}
        >
          <p>🔒 Questo contenuto è riservato agli utenti premium</p>
          <button onClick={() => setUserType("premium")}>Diventa Premium!</button>
        </div>
      )}
    </div>
  );
}
