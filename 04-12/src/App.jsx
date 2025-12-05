import "./App.css";
import Header from "./components/layout/Header.jsx";
import ArticleCard from "./components/ArticleCard.jsx";

function App() {
  return (
    <>
      <div style={{ minHeight: "100vh" }}>
        <Header />
        <ArticleCard title="Il mio Titolo" text="Testo dell'articolo qui." />
      </div>
    </>
  );
}

export default App;
