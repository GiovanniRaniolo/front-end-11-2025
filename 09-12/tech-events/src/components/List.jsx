export default function List({ items, renderItem }) {
  if (!items || items.length === 0) {
    return <p>Nessun elemento disponibile.</p>;
  }

  return (
    <ul className="list">
      {items.map((item, index) => (
        <li key={item.id || item.slug || item.path?.join("/") || index}>{renderItem(item)}</li>
      ))}
    </ul>
  );
}
