import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaHeart, FaWhatsapp } from "react-icons/fa";
import "../Styles/Women.css";
import { Link } from "react-router-dom";
import Sidebar from "../components/Sidebar";

const Women = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/data.json");
        const WomensProducts = response.data.products.filter( (product) => product.category.gender === "Women");
        setProducts(WomensProducts);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="women-container">
      <div className="row" style={{justifyContent:"space-around"}}>
        
        <div className="col-md-3">
          <Sidebar />
        </div>

        {/* Product Grid */}
        <div className="col-md-9">
          <h1 className="women-title text-center my-4">Women's Products</h1>
          <div className="row">
            {products.map((product) => (
              <div className="women-card-container col-md-4 mb-4" key={product.id}>
                <div className="women-card h-100">
                  <img src={product.image[0]}  className="women-card-img-top" alt={product.title} />
                  <div className="women-card-body text-center">
                    <h5 className="women-card-title">{product.title}</h5>
                    <p className="women-card-text text-muted">By {product.brand}</p>
                    <div className="women-price-section mb-3">
                      <span className="text-success fw-bold"> ₹{product.price} </span>{" "}
                      <span className="text-muted text-decoration-line-through"> ₹{product.before_disc} </span>{" "}
                      <span className="text-danger"> {product.offer_percent}% off </span>
                    </div>
                    <div className="d-flex justify-content-center gap-3">
                      <FaHeart className="women-heart-icon text-danger" style={{ cursor: "pointer" }} onClick={() => alert(`Liked ${product.title}`)}
                      />
                      <Link href={`https://wa.me/?text=Check out this product: ${product.title} for ₹${product.price}`} target="_blank" rel="noopener noreferrer">
                        <FaWhatsapp className="women-whatsapp-icon text-success" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Women;
