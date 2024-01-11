// STYLE
import "./App.css";

// COMPONENTS
import Main from "./pages/Main";
import ListPage from "./pages/List";
import MenuPage from "./pages/Menu";
import LoginPage from "./pages/Login";
import AdminPage from "./pages/Admin";

// REACT ROUTER DOM
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/menu" element={<MenuPage />} />
        <Route path="/home" element={<Main />} />
        <Route path="/client" element={<ListPage />} />
        <Route path="/admin" element={<AdminPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
