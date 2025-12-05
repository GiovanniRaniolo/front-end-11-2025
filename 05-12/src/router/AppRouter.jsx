import { Route, Routes } from "react-router-dom";
//import Pagine
import Home from "../pages/Home.jsx";
import About from "../pages/About.jsx";
import Contacts from "../pages/Contacts.jsx";

function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contacts" element={<Contacts />} />
    </Routes>
  );
}

export default AppRouter;
