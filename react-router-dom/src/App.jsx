import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "../components/Navbar";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Cart from "./pages/Cart";
import About from "./pages/About";

function App() {
  return (
    <Router>
      {/* Navbar sticky on top */}
      <Navbar />

      {/* Full width and height container */}
      <div
        style={{
          minHeight: "100vh",
          width: "100vw", // full viewport width
          background: "linear-gradient(135deg, #FFA500, #FF7F50)",
          display: "flex",
          flexDirection: "column",
          padding: "0", // remove inner padding
          margin: "0", // remove margin
          boxSizing: "border-box",
        }}
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
