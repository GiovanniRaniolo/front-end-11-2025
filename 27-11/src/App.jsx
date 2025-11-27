import "./App.css";
import WelcomeCard from "./components/WelcomeCard/WelcomeCard";
import Hello from "./components/Hello/Hello.jsx";

function App() {
  const users = [
    { id: 1, name: "Mario", age: 19 },
    { id: 2, name: "Gino", age: 16 },
    { id: 3, name: "Anna", age: 24 },
  ];

  return (
    <section>
      <WelcomeCard name="Gino" age={16} isVip={true} />
      {users.map((user) => (
        <Hello key={user.id} name={user.name} age={user.age} />
      ))}
    </section>
  );
}

export default App;
