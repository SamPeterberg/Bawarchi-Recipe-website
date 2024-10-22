import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "../src/components/pages/Home";
import Signin from "./components/pages/auth/Signin";
import Signup from "./components/pages/auth/Signup";
import Contact from "./components/pages/Contact";
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./components/pages/About";
import AllRecipes from "./components/pages/AllRecipes";
import Recipe from "./components/pages/Recipe";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="Signin" element={<Signin />} />
          <Route path="Signup" element={<Signup />} />
          <Route path="Contact" element={<Contact />} />
          <Route path="About" element={<About />} />
          <Route path="AllRecipes" element={<AllRecipes />} />
          <Route path="Recipe/:id" element={<Recipe />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
