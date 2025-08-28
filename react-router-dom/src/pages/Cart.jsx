import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const navigate = useNavigate();
  const [cartItems, setCartItems] = useState([]);

  // Load cart from localStorage
  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(savedCart);
  }, []);

  const clearCart = () => {
    localStorage.removeItem("cart");
    setCartItems([]);
  };

  const total = cartItems.reduce((sum, item) => sum + item.price, 0);

  return (
    <div
      style={{
        minHeight: "100vh",
        width: "100%",
        background: "linear-gradient(to right, #f7f7f7, #e0e0e0)",
        padding: "80px 20px 20px", // top padding for navbar
        boxSizing: "border-box",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <h1 style={{ marginBottom: "40px", color: "#333" }}>Your Cart</h1>

      {cartItems.length === 0 ? (
        <p style={{ fontSize: "18px", color: "#555" }}>Your cart is empty.</p>
      ) : (
        <>
          <ul
            style={{
              listStyle: "none",
              padding: 0,
              width: "100%",
              maxWidth: "700px",
            }}
          >
            {cartItems.map((item, index) => (
              <li
                key={index}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "20px",
                  marginBottom: "20px",
                  border: "1px solid #ccc",
                  borderRadius: "10px",
                  padding: "15px",
                  backgroundColor: "white",
                  boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
                  transition: "transform 0.2s",
                }}
              >
                <img
                  src={item.image || "https://via.placeholder.com/80"}
                  alt={item.name}
                  style={{
                    width: "80px",
                    height: "80px",
                    objectFit: "cover",
                    borderRadius: "8px",
                  }}
                />
                <div style={{ flex: 1 }}>
                  <h3 style={{ margin: 0, color: "#333" }}>{item.name}</h3>
                  <p style={{ margin: "5px 0", color: "#777" }}>${item.price}</p>
                </div>
              </li>
            ))}
          </ul>

          <h2 style={{ marginTop: "20px", color: "#333" }}>Total: ${total}</h2>

          <div
            style={{
              marginTop: "30px",
              display: "flex",
              flexDirection: "column",
              gap: "15px",
              alignItems: "center",
            }}
          >
            <button
              onClick={clearCart}
              style={{
                padding: "12px 25px",
                cursor: "pointer",
                backgroundColor: "#ff4d4d",
                color: "white",
                border: "none",
                borderRadius: "6px",
                width: "200px",
                fontSize: "16px",
                fontWeight: "bold",
              }}
            >
              Clear Cart
            </button>

            <button
              onClick={() => navigate("/products")}
              style={{
                padding: "12px 25px",
                cursor: "pointer",
                backgroundColor: "#007BFF",
                color: "white",
                border: "none",
                borderRadius: "6px",
                width: "200px",
                fontSize: "16px",
                fontWeight: "bold",
              }}
            >
              Continue Shopping
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
