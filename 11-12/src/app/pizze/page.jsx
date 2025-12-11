import PizzaAction from "./components/PizzaAction";

export default async function MenuPage() {
  const res = await fetch("http://localhost:3000/api/pizze", { cache: "no-store" });
  const pizze = await res.json();
  console.log("Pizze fetched:", pizze);

  return (
    <main>
      <h1>Menu delle Pizze</h1>
      {pizze.map((pizza) => (
        <article key={pizza.id}>
          <h2>{pizza.nome}</h2>
          <ul>
            <li>{pizza.ingredienti}</li>
          </ul>
          <span>Prezzo: {pizza.prezzo} €</span>
          <PizzaAction pizzaId={pizza.id} pizzaNome={pizza.nome} />
        </article>
      ))}
    </main>
  );
}
