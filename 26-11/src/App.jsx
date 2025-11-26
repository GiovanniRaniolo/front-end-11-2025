import "./App.css";
import Button from "./components/Button/Button";
import { mostraButtonClicked, mostraSaluti, mostraAddio } from "./utilities/mostraFucntions";
import Counter from "./components/Counter/Counter";
import ShoppingList from "./components/ShoppingList/ShoppingList";
import { items } from "./mock/items";
import { products } from "./mock/items";

function App() {
  return (
    <section>
      <h2>Alert test</h2>
      <Button text="Click me" onClick={mostraButtonClicked} className="btn1" />
      <Button text="Saluti" onClick={mostraSaluti} className="btn2" />
      <Button text="Addio" onClick={mostraAddio} className="btn3" />
      <p>clicca questo pulsante per mostrare un alert</p>
      <Counter />
      <ShoppingList items={items} />
      <ShoppingList items={products} />
    </section>
  );
}

export default App;
