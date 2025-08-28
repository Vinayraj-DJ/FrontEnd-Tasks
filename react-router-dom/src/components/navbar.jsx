import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [cartCount, setCartCount] = useState(0);
  const [isOpen, setIsOpen] = useState(false); // for mobile menu

  // Get cart count from localStorage
  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCartCount(savedCart.length);
  }, []);

  // Update cart count if localStorage changes
  useEffect(() => {
    const handleStorageChange = () => {
      const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
      setCartCount(savedCart.length);
    };
    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, []);

  return (
    <nav
      style={{
        width: "100%",
        backgroundColor: "#007BFF",
        color: "white",
        position: "sticky",
        top: 0,
        zIndex: 1000,
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "10px 20px",
        }}
      >
        {/* Logo */}
        <div style={{ fontSize: "24px", fontWeight: "bold" }}>
          <Link to="/" style={{ color: "white", textDecoration: "none" }}>
            Vinay's Shop
          </Link>
        </div>

        {/* Hamburger Menu Icon for Mobile */}
        <div className="mobile-menu-button" style={{ display: "none" }}>
          <button
            onClick={() => setIsOpen(!isOpen)}
            style={{
              backgroundColor: "white",
              border: "none",
              borderRadius: "5px",
              padding: "5px 10px",
              fontSize: "20px",
              cursor: "pointer",
              color: "#007BFF",
              fontWeight: "bold",
            }}
          >
            {/* You can replace this text with any icon like SVG */}
            {isOpen ? "✖" : "☰"}
          </button>
        </div>

        {/* Navigation Links */}
        <div
          className={`nav-links ${isOpen ? "open" : ""}`}
          style={{
            display: "flex",
            gap: "20px",
            alignItems: "center",
          }}
        >
          <Link to="/" onClick={() => setIsOpen(false)} style={{ color: "white", textDecoration: "none" }}>
            Home
          </Link>
          <Link to="/products" onClick={() => setIsOpen(false)} style={{ color: "white", textDecoration: "none" }}>
            Products
          </Link>
          <Link to="/about" onClick={() => setIsOpen(false)} style={{ color: "white", textDecoration: "none" }}>
            About
          </Link>
          <Link
            to="/cart"
            onClick={() => setIsOpen(false)}
            style={{ color: "white", textDecoration: "none", position: "relative" }}
          >
            Cart
            {cartCount > 0 && (
              <span
                style={{
                  position: "absolute",
                  top: "-8px",
                  right: "-12px",
                  backgroundColor: "red",
                  color: "white",
                  borderRadius: "50%",
                  padding: "2px 7px",
                  fontSize: "12px",
                }}
              >
                {cartCount}
              </span>
            )}
          </Link>
        </div>
      </div>

      {/* Mobile Menu Styles */}
      <style>
        {`
          @media (max-width: 768px) {
            .mobile-menu-button {
              display: block;
            }
            .nav-links {
              flex-direction: column;
              display: ${isOpen ? "flex" : "none"};
              gap: 10px;
              background-color: #007BFF;
              padding: 10px 0;
            }
          }
        `}
      </style>
    </nav>
  );
};

export default Navbar;
