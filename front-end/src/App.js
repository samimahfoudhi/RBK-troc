import "./App.css";
import Navbar from "./components/Navbar";
import Products from "./components/Products";
import Footer from "./components/Footer";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import { useState, useEffect } from "react";
import About from "./components/About";
import Profil from "./components/Profil";
import ProfilInfo from "./components/ProfilInfo";
import AddProduct from "./components/AddProduct";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";

import axios from "axios";
import AdminProfil from "./components/AdminProfil";
import Admin from "./components/Admin";

function App() {
  const [seller, setSeller] = useState({});
  const [idUpdate, setIdUpdate] = useState();
  const [data, setData] = useState([]);
  const importSeller = (sel) => {
    setSeller(sel);
  };
  const importId = (e) => {
    setIdUpdate(e);
  };

  useEffect(() => {
    axios
      .get("http://localhost:7000/getAllProducts")
      .then(({ data }) => setData(data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/product" element={<Products data={data} />} />
        <Route
          exact
          path="/login"
          element={<SignIn importSeller={importSeller} />}
        />
        <Route exact path="/about" element={<About />} />
        <Route
          exact
          path="/test"
          element={<Profil importId={importId} seller={seller} />}
        />
        <Route exact path="/test1" element={<ProfilInfo />} />
        <Route
          exact
          path="/test2"
          element={<AddProduct idUpdate={idUpdate} seller={seller} />}
        />

        <Route exact path="/test3" element={<SignUp />} />
        <Route
          exact
          path="/test4"
          element={<AdminProfil importId={importId} data={data} />}
        />
        <Route exact path="/test5" element={<Admin />} />

      </Routes>
      <Footer />
    </div>
  );
}

export default App;
