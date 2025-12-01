export default function EsempioComparazione({ score }) {
  return (
    <div>
      <h2>Punteggio: {score}/100</h2>

      {/* ✅ USA TERNARIO quando hai 2 opzioni chiare */}
      <p>Risultato: {score >= 60 ? "✅ Promosso" : "❌ Bocciato"}</p>

      {/* ✅ USA && quando vuoi mostrare qualcosa O NIENTE */}
      {score >= 90 && <p>🏆 Complimenti! Punteggio eccellente!</p>}
      {score < 40 && <p>😞 Ti consigliamo di studiare di più</p>}

      {/* ❌ NON fare così (confuso) */}
      {/*{score >= 60 && <p>Promosso</p>}
            {score < 60 && <p>Bocciato</p>}*/}

      {/* ✅ Meglio così per 2 opzioni */}
      {/*<p>{score >= 60 ? 'Promosso' : 'Bocciato'}</p>*/}
    </div>
  );
}
