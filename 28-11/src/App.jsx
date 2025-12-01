import "./App.css";
import { users } from "./data/users";
import UserList from "./components/organisms/UserList";
import ChildrenCard from "./components/atoms/ChildrenCard";
import Button from "./components/atoms/Button";
import NotificationBell from "./components/organisms/NotificationBell";
import PremiumContent from "./components/organisms/PremiumContent";
import EsempioComparazione from "./components/atoms/EsempioComparazione";

function App() {
  console.log(users);
  return (
    <main>
      <NotificationBell />
      <PremiumContent />
      <EsempioComparazione score={90} />
      <ChildrenCard title="Titolo del ChildrenCard">
        <p>Questo è il contenuto passato come children al componente ChildrenCard.</p>
        <Button variant="outline">
          <a href="www.google.com">Vai su Google</a>
        </Button>
      </ChildrenCard>
      <UserList users={users} />
    </main>
  );
}

export default App;
