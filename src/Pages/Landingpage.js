import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const LandingPage = () => {
  const [products, setProducts] = useState([]);

  
  useEffect(() => {
    axios
      .get("/data.json") 
      .then((response) => {
        setProducts(response.data.products); 
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div className="container mt-5">
      <div className="row">
        {products.map((product) => (
          <div key={product.id} className="col-lg-3 col-md-4 col-sm-6 mb-4">
            <div className="card h-100">
            
              <img src={product.brand_image} className="card-img-top" alt={product.title}  style={{ objectFit: "fill", height: "300px" }}/>
              <div className="card-body">
                <h5 className="card-title">{product.title}</h5>
                <p className="card-text">
                  <strong>Brand:</strong> {product.brand} <br />
                  <strong>Price:</strong> ₹{product.price} <br />
                  <strong>Before Discount:</strong> ₹{product.before_disc} <br />
                  <strong>Discount:</strong> {product.offer_percent}% off <br />
                  <strong>Sizes:</strong> {product.size.join(", ")} <br />
                  <strong>Quantity:</strong> {product.Quantity}
                </p>
                <Link href="#" className="btn btn-primary">View Product </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LandingPage;
