import React from "react";

const About = () => {
  return (
    <div
      style={{
        width: "100%",
        minHeight: "100vh",
        backgroundColor: "#f9f9f9", // soft background
        padding: "80px 20px",
        boxSizing: "border-box",
        textAlign: "center",
      }}
    >
      {/* Heading */}
      <h1
        style={{
          fontSize: "48px",
          marginBottom: "20px",
          color: "#333",
          fontWeight: "bold",
        }}
      >
        About Our Store
      </h1>

      {/* Description */}
      <p
        style={{
          fontSize: "20px",
          maxWidth: "700px",
          margin: "0 auto 40px",
          lineHeight: "1.8",
          color: "#555",
        }}
      >
        Welcome to My Shopping App! Our mission is to provide fresh, high-quality products
        at the best prices. Whether you’re looking for fruits, vegetables, or other daily essentials,
        we make shopping easy, fast, and enjoyable.
      </p>

      {/* Mission / Values */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "40px",
          flexWrap: "wrap",
          marginTop: "20px",
        }}
      >
        <div
          style={{
            maxWidth: "250px",
            backgroundColor: "white",
            padding: "20px",
            borderRadius: "15px",
            boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
            transition: "transform 0.2s",
            cursor: "pointer",
          }}
          onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
          onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
        >
          <h3 style={{ color: "#FF6F61" }}>Quality Products</h3>
          <p style={{ color: "#555" }}>We ensure every item is fresh and carefully selected.</p>
        </div>

        <div
          style={{
            maxWidth: "250px",
            backgroundColor: "white",
            padding: "20px",
            borderRadius: "15px",
            boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
            transition: "transform 0.2s",
            cursor: "pointer",
          }}
          onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
          onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
        >
          <h3 style={{ color: "#FF6F61" }}>Fast Delivery</h3>
          <p style={{ color: "#555" }}>Get your products delivered right to your doorstep quickly.</p>
        </div>

        <div
          style={{
            maxWidth: "250px",
            backgroundColor: "white",
            padding: "20px",
            borderRadius: "15px",
            boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
            transition: "transform 0.2s",
            cursor: "pointer",
          }}
          onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
          onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
        >
          <h3 style={{ color: "#FF6F61" }}>Customer Satisfaction</h3>
          <p style={{ color: "#555" }}>We prioritize your happiness and smooth shopping experience.</p>
        </div>
      </div>

      {/* Image Section */}
      <div style={{ marginTop: "50px" }}>
        <img
          src="https://media.istockphoto.com/id/1425139113/photo/purchasing-goods-with-smartphone-at-grocery-store.webp?a=1&b=1&s=612x612&w=0&k=20&c=kQHbQJ-PmXBgxDv8o9aihr8qAPqnDc3IvVYrex2aX5o="
          alt="Shopping"
          style={{
            maxWidth: "80%",
            borderRadius: "20px",
            boxShadow: "0 6px 15px rgba(0,0,0,0.1)",
            transition: "transform 0.3s",
          }}
          onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.03)")}
          onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
        />
      </div>
    </div>
  );
};

export default About;
