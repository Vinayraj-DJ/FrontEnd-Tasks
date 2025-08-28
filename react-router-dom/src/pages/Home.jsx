import { useNavigate } from "react-router-dom";

// Import images (place your images in src/images folder)
import AppleImg from "../images/apple.jpg";
import BananaImg from "../images/banana.jpg";
import OrangeImg from "../images/orange.jpg";

const Home = () => {
  const navigate = useNavigate();

  const featuredProducts = [
    { id: 1, name: "Apple", price: 2, image: AppleImg },
    { id: 2, name: "Banana", price: 1, image: BananaImg },
    { id: 3, name: "Orange", price: 3, image: OrangeImg },
  ];

  return (
    <div style={{ width: "100%" }}>
      {/* Hero Section with Shopping Cart Background */}
      <section
        style={{
          backgroundImage: "linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('https://media.istockphoto.com/id/500876662/photo/shopping-cart-full-of-food-in-supermarket-aisle-side-tilt.jpg?s=612x612&w=0&k=20&c=hLmLC_kEwx1x3BPVI5ujJ34oYJciWA1AwOoJj9tjf1s=')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          color: "white",
          padding: "120px 20px",
          textAlign: "center",
          minHeight: "80vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h1 style={{ fontSize: "50px", marginBottom: "20px", fontWeight: "bold" }}>
          Welcome to MyShop
        </h1>
        <p style={{ fontSize: "22px", marginBottom: "30px" }}>
          Fresh fruits and quality products delivered to your door
        </p>
        <button
          onClick={() => navigate("/products")}
          style={{
            padding: "15px 30px",
            fontSize: "18px",
            cursor: "pointer",
            backgroundColor: "#FF6F61",
            color: "white",
            border: "none",
            borderRadius: "8px",
            fontWeight: "bold",
            transition: "transform 0.2s",
          }}
          onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
          onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
        >
          Shop Now
        </button>
      </section>

      {/* Featured Products */}
      <section style={{ textAlign: "center", padding: "60px 20px", backgroundColor: "#f9f9f9" }}>
        <h2 style={{ marginBottom: "40px", fontSize: "36px", color: "#333" }}>Featured Products</h2>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "30px",
            flexWrap: "wrap",
          }}
        >
          {featuredProducts.map((product) => (
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
                style={{
                  width: "120px",
                  height: "120px",
                  objectFit: "cover",
                  borderRadius: "10px",
                  marginBottom: "10px",
                }}
              />
              <h3 style={{ marginBottom: "10px", color: "#333" }}>{product.name}</h3>
              <p style={{ color: "#777", fontWeight: "bold" }}>${product.price}</p>
            </div>
          ))}
        </div>
      </section>

      {/* About Section */}
      <section
        style={{
          backgroundColor: "#fff3e0",
          padding: "60px 20px",
          textAlign: "center",
        }}
      >
        <h2 style={{ fontSize: "36px", marginBottom: "20px", color: "#FF6F61" }}>
          Why Shop With Us?
        </h2>
        <p style={{ maxWidth: "750px", margin: "0 auto", lineHeight: "1.8", fontSize: "18px", color: "#555" }}>
          We provide fresh, high-quality products at the best prices. Browse, add to cart, and checkout quickly with our smooth
          shopping experience. Shop from the comfort of your home and enjoy fast delivery!
        </p>
      </section>
    </div>
  );
};

export default Home;
