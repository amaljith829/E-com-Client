import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import "./product.css";
import Navbar from "../../components/Navbar/Navbar";
import Card from "../../components/Card/Card";
import Footer from "../../components/Footer/Footer";



const Product = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3000/get");
        console.log(response.data);
        setData(response.data);
      } catch (e) {
        setError(e.response?.data?.message || "An error occurred");
      }
    };
    fetchData();
  },[]);

  return (
    <div>
      <Navbar />
      <div className="product-container">
        {data.map((product) => (
          <Card key={product._id} {...product} />
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default Product;