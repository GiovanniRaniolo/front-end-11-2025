import { useState } from "react";
import UserStats from "./components/UserStats/UserStats";
import UserSettings from "./components/UserSettings/UserSettings";
import UserProfile from "./components/UserProfile/UserProfile";
import { mockUser } from "./mock/user";
function App2() {
  const [userData, setUserData] = useState(mockUser);
  console.table(userData);
  return (
    <>
      <UserProfile user={userData} onUpdateUser={setUserData} />
      <UserSettings user={userData} onUpdateUser={setUserData} />
      <UserStats user={userData} />
    </>
  );
}

export default App2;
