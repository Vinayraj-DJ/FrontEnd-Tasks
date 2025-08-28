import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AppleImg from "../images/apple.jpg";
import BananaImg from "../images/banana.jpg";
import OrangeImg from "../images/orange.jpg";
import MangoImg from "../images/mango.jpg";
import GrapesImg from "../images/grapes.jpg";

const Products = () => {
  const navigate = useNavigate();
  const [cart, setCart] = useState([]);

  // Product list with image URLs
  const productList = [
    { id: 1, name: "Apple", price: 2, image: AppleImg },
    { id: 2, name: "Banana", price: 1, image:BananaImg  },
    { id: 3, name: "Orange", price: 3, image: OrangeImg },
    { id: 4, name: "Mango", price: 4, image:MangoImg  },
    { id: 5, name: "Grapes", price: 3, image:GrapesImg },
  ];

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(savedCart);
  }, []);

  const addToCart = (product) => {
    const updatedCart = [...cart, product];
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  return (
    <div style={{ width: "100%", minHeight: "100vh", padding: "60px 20px", backgroundColor: "#f9f9f9" }}>
      <h1 style={{ textAlign: "center", fontSize: "42px", marginBottom: "40px", color: "#FF6F61", fontWeight: "bold" }}>
        Products
      </h1>
      
      <div style={{
        display: "flex",
        justifyContent: "center",
        gap: "30px",
        flexWrap: "wrap",
      }}>
        {productList.map((product) => (
          <div
            key={product.id}
            style={{
              border: "1px solid #ddd",
              borderRadius: "15px",
              padding: "20px",
              width: "180px",
              backgroundColor: "white",
              boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
              transition: "transform 0.2s",
              cursor: "pointer",
              textAlign: "center",
            }}
            onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
            onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
          >
            <img
              src={product.image}
              alt={product.name}
              style={{ width: "120px", height: "120px", objectFit: "cover", borderRadius: "10px", marginBottom: "10px" }}
            />
            <h3 style={{ marginBottom: "10px", color: "#333" }}>{product.name}</h3>
            <p style={{ color: "#777", fontWeight: "bold" }}>${product.price}</p>
            <button
              onClick={() => addToCart(product)}
              style={{
                padding: "10px 15px",
                cursor: "pointer",
                backgroundColor: "#FF6F61",
                color: "white",
                border: "none",
                borderRadius: "8px",
                fontWeight: "bold",
                marginTop: "10px",
                transition: "background-color 0.2s",
              }}
              onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#e65a50")}
              onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "#FF6F61")}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>

      {cart.length > 0 && (
        <div style={{ marginTop: "50px", textAlign: "center" }}>
          <h2 style={{ fontSize: "28px", marginBottom: "20px", color: "#333" }}>Cart ({cart.length})</h2>
          <ul style={{ listStyle: "none", padding: 0 }}>
            {cart.map((item, index) => (
              <li key={index} style={{ marginBottom: "10px", fontSize: "18px", color: "#555" }}>
                {item.name} - ${item.price}
              </li>
            ))}
          </ul>
          <button
            onClick={() => navigate("/cart")}
            style={{
              marginTop: "20px",
              padding: "12px 25px",
              cursor: "pointer",
              backgroundColor: "#007BFF",
              color: "white",
              border: "none",
              borderRadius: "8px",
              fontSize: "16px",
              fontWeight: "bold",
            }}
          >
            Go to Cart
          </button>
        </div>
      )}
    </div>
  );
};

export default Products;
