import React, { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../Redux/cartSlice";
import axios from "axios";
import { FaRegHeart } from "react-icons/fa";

const ProductDetailsPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [product, setProduct] = useState(null);
  const [similarProducts, setSimilarProducts] = useState([]);
  const [selectedSize, setSelectedSize] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get("/data.json");
        const productData = response.data.products.find(item => item.id === parseInt(id));
        setProduct(productData);
        const filteredProducts = response.data.products.filter(item =>  item.category.type === productData.category.type &&  item.category.gender === productData.category.gender &&  item.id !== productData.id
        );
        setSimilarProducts(filteredProducts);
      } catch (error) {
        console.error("Error fetching product:", error);  } };
    fetchProduct();
  }, [id]);

  if (!product) return <div>Loading...</div>;

  return (
    <div className="container mt-4">
      <div className="d-flex">
        <div
          className="image-section"
          style={{  flex: 1,  padding: "20px",  backgroundColor: "white",  borderRadius: "8px"}}>
          <img  src={product.image[0]} alt={product.title} style={{   width: "300px",  height: "400px",  objectFit: "fill",  display: "block",  margin: "0 auto"}} />
          <div className="similar-products mt-4">
            <h4>Similar Products</h4>
            <div  style={{  display: "grid",  gridTemplateColumns: "repeat(3, 1fr)",  gap: "10px",  marginTop: "10px" }}>
              {similarProducts.map(similarProduct => (
                <div  key={similarProduct.id}  style={{  border: "1px solid #ccc",  backgroundColor: "white",  padding: "10px",  borderRadius: "5px",  textAlign: "center",  cursor: "pointer"}}>
                  <Link
                    to={`/product/${similarProduct.id}`}
                    style={{ textDecoration: "none", color: "inherit" }}>
                    <img  src={similarProduct.image[0]}  alt={similarProduct.title}  style={{  width: "100%",  height: "120px",  objectFit: "contain",  marginBottom: "10px" }} />
                    <p style={{ fontWeight: "bold" }}>{similarProduct.title}</p>
                    <p>
                      <span style={{ color: "green", fontWeight: "bold" }}>₹{similarProduct.price}</span>{" "}
                      <span style={{ textDecoration: "line-through" }}>₹{similarProduct.before_disc}</span>
                    </p>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div
          className="details-section"
          style={{  flex: 1,  padding: "20px",  backgroundColor: "white",  borderRadius: "8px",  marginLeft: "20px",  marginBottom: "20px"  }}>
          <h2>{product.title}</h2>
          <p>
            <strong>Brand:</strong>{" "}
            <img  src={product.brand_image}  alt={product.brand}  style={{ height: "20px", marginLeft: "5px" }} />
          </p>
          <p>
            <span style={{ color: "green", fontWeight: "bold" }}>{product.offer_percent}% OFF</span>
          </p>
          <div>
            <p><strong>Gender:</strong> {product.category.gender}</p>
            <p><strong>Type:</strong> {product.category.type}</p>
            <p><strong>Model:</strong> {product.category.model}</p>
          </div>
          <div style={{ margin: "10px 0" }}>
            <p style={{ marginBottom: "5px" }}>Select Size:</p>
            {product.size.map(size => (
              <button  key={size}  onClick={() => setSelectedSize(size)}  style={{  margin: "5px",  padding: "10px 15px",  border: "1px solid #ccc",  borderRadius: "4px",  cursor: "pointer",
                  backgroundColor: selectedSize === size ? "#28a745" : "#fff",
                  color: selectedSize === size ? "#fff" : "#000"  }}> {size} </button>
            ))}
          </div>
          <p>
            <strong>Price:</strong>{" "}
            <span style={{ color: "green" }}>₹{product.price}</span>
          </p>
          <p>
            <strong>Before Discount:</strong>{" "}
            <span style={{ textDecoration: "line-through" }}>₹{product.before_disc}</span>
          </p>
          <div style={{ marginTop: "20px" }}>
            <button onClick={() => {
                if (!selectedSize) {
                  alert("Please select a size before adding to the cart.");
                  return;
                }
                dispatch(addToCart({ ...product, selectedSize }));
              }}
              style={{  marginRight: "10px",  padding: "10px 20px",  backgroundColor: "#28a745",  color: "#fff",  border: "none",  borderRadius: "4px",  cursor: "pointer"}}>ADD TO CART
            </button>
            <button onClick={() => navigate("/Profile")}  style={{  padding: "10px 20px",  backgroundColor: "#fff",  color: "#28a745",
                border: "1px solid #28a745",
                borderRadius: "4px",
                cursor: "pointer"  }}>
              <FaRegHeart />
            </button>
          </div>
          <div style={{ marginTop: "20px" }}>
            <h4>Size Chart</h4>
            <table  style={{  width: "100%",  borderCollapse: "collapse",  marginBottom: "10px"}}>
              <thead>
                <tr>
                  <th>Standard Size</th>
                  <th>XS</th>
                  <th>S</th>
                  <th>M</th>
                  <th>L</th>
                  <th>XL</th>
                  <th>XXL</th>
                  <th>XXXL</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Waist</td>
                  <td>28</td>
                  <td>30</td>
                  <td>32</td>
                  <td>34</td>
                  <td>36</td>
                  <td>38</td>
                  <td>40</td>
                </tr>
                <tr>
                  <td>Chest</td>
                  <td>34</td>
                  <td>36</td>
                  <td>38</td>
                  <td>40</td>
                  <td>42</td>
                  <td>44</td>
                  <td>46</td>
                </tr>
                <tr>
                  <td>Hip</td>
                  <td>36</td>
                  <td>38</td>
                  <td>40</td>
                  <td>42</td>
                  <td>44</td>
                  <td>46</td>
                  <td>48</td>
                </tr>
              </tbody>
            </table>
            <h4>Delivery & Return</h4>
            <p>Expected delivery time: 3-5 working days.</p>
            <p>Easy returns within 15 days of delivery.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsPage;