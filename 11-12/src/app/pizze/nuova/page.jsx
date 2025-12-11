"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function NuovaPizzaPage() {
  const [nome, setNome] = useState("");
  const [ingredienti, setIngredienti] = useState("");
  const [prezzo, setPrezzo] = useState("");
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);

    const res = await fetch("/api/pizze", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ nome, ingredienti, prezzo: parseFloat(prezzo) }),
    });
    if (res.ok) {
      router.refresh();
    }
    setTimeout(() => {
      router.push("/pizze");
      setLoading(false);
    }, 2500);
  }

  return (
    <main>
      <Link href="/pizze">Indietro al Menu</Link>
      <h1>Aggiungi una Nuova Pizza</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="nome">Nome Pizza</label>
          <input type="text" value={nome} id="nome" onChange={(e) => setNome(e.target.value)} required />
          <label htmlFor="ingredienti">Ingredienti</label>
          <textarea value={ingredienti} id="ingredienti" onChange={(e) => setIngredienti(e.target.value)} required />
          <label htmlFor="prezzo">Prezzo</label>
          <input type="number" value={prezzo} id="prezzo" onChange={(e) => setPrezzo(e.target.value)} required />
        </div>
        <button className="px-6 py-2 bg-blue-500 text-white rounded" type="submit" disabled={loading}>
          {loading ? "Caricamento..." : "Aggiungi Pizza"}
        </button>
      </form>
    </main>
  );
}
