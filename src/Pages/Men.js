import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaHeart, FaWhatsapp } from "react-icons/fa";
import "../Styles/Sidebar.css";
import Sidebar from "../components/Sidebar";
// import { Link } from "react-router-dom";

const Men = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/data.json");
        const mensProducts = response.data.products.filter(
          (product) => product.category.gender === "Men"
        );
        setProducts(mensProducts);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="container-fluid">
      <div className="row" style={{justifyContent:"space-around"}}>
        
        <div className="col-md-3">
          <Sidebar />
        </div>

       
        <div className="col-md-9">
          
          <div className="row" style={{justifyContent:"space-around"}}>
            {products.map((product) => (
              <div className="col-md-4 mb-4" key={product.id}>
                <div className="card h-100">
                  <img
                    src={product.image[0]}
                    className="card-img-top"
                    alt={product.title}
                  />
                  <div className="card-body text-center">
                    <h5 className="card-title">{product.title}</h5>
                    <p className="card-text text-muted">By {product.brand}</p>
                    <div className="price-section mb-3">
                      <span className="text-success fw-bold"> ₹{product.price}</span>{" "}
                      <span className="text-muted text-decoration-line-through">₹{product.before_disc} </span>{" "}
                      <span className="text-danger">{product.offer_percent}% off</span></div>
                    <div className="d-flex justify-content-center gap-3"><FaHeart className="text-danger"style={{ cursor: "pointer" }} onClick={() => alert(`Liked ${product.title}`)}/>
                       <FaWhatsapp className="text-success" />
                      
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

export default Men;
