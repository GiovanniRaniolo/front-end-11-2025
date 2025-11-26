import "./ShoppingList.css";

function ShoppingList({ items }) {
  return (
    <section className="shopping-list">
      <h2>Shopping List, contiene {items.length} elementi</h2>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            <h3>{item.name}</h3>
            <p>{item.description}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default ShoppingList;
