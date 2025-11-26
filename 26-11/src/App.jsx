import "./App.css";
import Button from "./components/Button/Button";
import { mostraButtonClicked, mostraSaluti, mostraAddio } from "./utilities/mostraFucntions";

function App() {
  return (
    <section>
      <h2>Alert test</h2>
      <Button text="Click me" />
      <Button text="Saluti" onClick={mostraSaluti} className="btn2" />
      <Button text="Addio" onClick={mostraAddio} className="btn3" />
      <p>clicca questo pulsante per mostrare un alert</p>
    </section>
  );
}

export default App;
