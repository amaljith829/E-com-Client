import React from "react";
import { useNavigate } from "react-router-dom";
import "./Card.css";

const Card = ({ id, image, name, description, price,stock }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/product/${id}`);
  };

 

  return (
    <div className="card" >
     
      <img src={`http://localhost:3000/${image}`} alt={name} className="card-image" />
      <div className="card-content">
        <h3 className="card-title">{name}</h3>
        <p className="card-description">{description}</p>
        <h4 className="card-price">₹{price}</h4>
        <button className="add-to-cart-btn" >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Card;