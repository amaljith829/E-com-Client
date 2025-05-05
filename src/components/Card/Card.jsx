import React from "react";
import { useNavigate } from "react-router-dom";
import "./Card.css";

const Card = ({ id, image, name, description, price,stock }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    const token = localStorage.getItem("token");
    if (!token) {
      alert("Please login to add items to the cart");
      navigate("/login");
      return;
    }

    const productId = "680741a2c583d2488c754ab8";
    const quantity = 1; // Default quantity is 1

    fetch("http://localhost:3000/products/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ productId, quantity }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.message) {
          alert(data.message);
        } else {
          alert("Product added to cart successfully");
        }
      })
      .catch((error) => {
        console.error("Error adding product to cart:", error);
        alert("Failed to add product to cart");
      });
  };

 

  return (
    <div className="card" >
     
      <img src={`http://localhost:3000/${image}`} alt={name} className="card-image" />
      <div className="card-content">
        <h3 className="card-title">{name}</h3>
        <p className="card-description">{description}</p>
        <h4 className="card-price">₹{price}</h4>
        <button className="add-to-cart-btn" onClick={handleClick} >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Card;