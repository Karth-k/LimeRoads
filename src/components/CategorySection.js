import React, { useState } from "react";
import { Link } from "react-router-dom";
import '../Styles/CategorySection.css';

const CategorySection = () => {
  const [selectedCategory, setSelectedCategory] = useState("Women");

  const categoryData = {
    Women: [
      { label: "My Feed", img: "/Assets/l_feed.jpg", link: "/ffeed" },
      { label: "Kurtas", img: "/Assets/l_ethnic.jpg", link: "f/women" },
      { label: "Tshirt", img: "/Assets/l_tshirt.jpg", link: "/ftshirt" },
      { label: "Shirts", img: "/Assets/l_shirt.jpg", link: "/fdresses" },
      { label: "Tops", img: "/Assets/l_tops.jpg", link: "/ftops" },
      { label: "Saree", img: "/Assets/l_saree.jpg", link: "/fsaree" },
      { label: "Bags", img: "/Assets/l_bags.jpg", link: "/fbags" },
      { label: "Footwear", img: "/Assets/l_foot.jpg", link: "/ffootwear" },
    ],
    Men: [
      { label: "My Feed", img: "/Assets/l_feed.jpg", link: "/mfeed" },
      { label: "T-Shirts", img: "/Assets/m_tshirt.jpg", link: "/mtshirts" },
      { label: "Shirts", img: "/Assets/m_shirt.jpg", link: "/mshirts" },
      { label: "Jeans", img: "/Assets/m_jeans.jpg", link: "/mjeans" },
      { label: "Suits", img: "/Assets/m_suits.jpg", link: "/msuits" },
      { label: "Formal Shoes", img: "/Assets/m_shoes.jpg", link: "/mshoes" },
      { label: "Scandals", img: "/Assets/m_scandals.jpg", link: "/mscandals" },
      { label: "Watch", img: "/Assets/m_watch.jpg", link: "/mwatch" }
      
    ],
    Kids: [
      { label: "My Feed", img: "/Assets/l_feed.jpg", link: "/kfeed" },
      { label: "Frocks", img: "/Assets/k_frock.jpg", link: "/kfrocks" },
      { label: "T-Shirts", img: "/Assets/k_thsirt.jpg", link: "/ktshirtsm" },
      { label: "Ethnic Wear", img: "/Assets/k_ethm.jpg", link: "/kethnicm" },
      { label: "T-Shirts", img: "/Assets/k_thsirtf.jpg", link: "/ktshirtsf" },
      { label: "Ethnic Wear", img: "/Assets/k_ethmf.jpg", link: "/kethnicf" },
      { label: "Twin Sets", img: "/Assets/k_twin.jpg", link: "/ktwin" },
    ],
  };

  return (
    <div className="container text-center mt-4" style={{marginTop:"0px"}}>

      <div className="row category-section">
        {["Women", "Men", "Kids"].map((category) => (
          <div className="col-auto" key={category}>
            <button
              className={`category-item ${selectedCategory === category ? "active" : "" }`}
              onClick={() => setSelectedCategory(category)} >
              {category}
            </button>
          </div>
        ))}
      </div>

      <div className="row mt-4" style={{ paddingLeft: "50px", justifyContent:"center"}}>
        {categoryData[selectedCategory].map((item, index) => (
          <div className="col-auto text-center" key={index}>
            <Link to={item.link} className="image-link">
              <img src={item.img} alt={item.label} className="circle-img" />
              <p className="mt-2">{item.label}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategorySection;
