import { Route, Routes, useNavigate } from "react-router";
import Login from "./pages/Login/Login";
import { useEffect, useState } from "react";
import MainBody from "./pages/MainBody";
import Details from "./pages/Details";
import GlobalStore from "./store/.store";
import Saved_P from "./pages/Saved_product_files/Saved_P";
import Search from "./components/Search";

function App() {
  const navigate = useNavigate();
  useEffect(() => {
    let token = localStorage.getItem("token");
    if (!token) {
      navigate("/login");
    } else if (token) {
      navigate("/main_body");
    } else {
      console.log("Error");
    }
  }, []);
  const [products, setProducts] = useState([]);
  return (
    <div>
      <GlobalStore.Provider value={{ products, setProducts }}>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/main_body" element={<MainBody />} />
          <Route path="/details/:itemId" element={<Details />} />
          <Route path="/savedProducts" element={<Saved_P/>} />
          <Route path="/search" element={<Search/>} />
        </Routes>
      </GlobalStore.Provider>
    </div>
  );
}

export default App;
