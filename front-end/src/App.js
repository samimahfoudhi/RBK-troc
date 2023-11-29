import "./App.css";
<<<<<<< HEAD
import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import Products from "./components/Products";

import SignUp from "./components/SignUp";
=======
import Navbar from "./components/Navbar";
import Products from "./components/Products";
>>>>>>> 8af99f6602df72ccccf95b231de9a6918223bc87
import Footer from "./components/Footer";
function App() {
  return (
    <div className="App">
      <Navbar />
<<<<<<< HEAD
      <Routes>
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/products" element={<Products />} />

        <Route exact path="/signup" element={<SignUp />} />
      </Routes>
=======
      <Products />
>>>>>>> 8af99f6602df72ccccf95b231de9a6918223bc87
      <Footer />
    </div>
  );
}

export default App;
