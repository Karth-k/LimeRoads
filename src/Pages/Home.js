import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="container text-center mt-4">
      {/* Women, Men, Kids Section */}
      <div className="row category-section">
        <div className="col-auto">
          <Link to="/Women" className="category-item"> Women</Link>
        </div>
        <div className="col-auto">
          <Link to="/Men" className="category-item">Men</Link>
        </div>
        <div className="col-auto position-relative">
          <Link to="/Kids" className="category-item">Kids</Link>
          <span className="badge bg-warning text-white position-absolute top-0 start-100 translate-middle flicker">New</span>
        </div>
      </div>

      {/* Circle Images Section */}
      <div className="row mt-4" style={{paddingLeft:"50px"}}>
        {[
          { label: "My Feed", img: "/Assets/l_feed.jpg", link: "/feed" },
          { label: "T-Shirt", img: "/Assets/l_tshirt.jpg", link: "/tshirt" },
          { label: "Shirts", img: "/Assets/l_shirt.jpg", link: "/shirts" },
          { label: "Jeans", img: "/Assets/l_jeans.jpg", link: "/jeans" },
          { label: "Bags", img: "/Assets/l_bags.jpg", link: "/trousers" },
          { label: "Ethnic Sets", img: "/Assets/l_ethnic.jpg", link: "/ethnic" },
          { label: "Footwears", img: "/Assets/l_footjpg.jpg", link: "/ethnic" },
          { label: "Beauty", img: "/Assets/l_beautyjpg.jpg", link: "/ethnic" },
        ].map((item, index) => (
          <div className="col-auto text-center" key={index}>
            <Link to={item.link} className="image-link">
              <img src={item.img} alt={item.label} className="circle-img" />
              <p className="mt-2">{item.label}</p>
            </Link>
          </div>
        ))}
      </div>

      {/* Carousel Section */}
      <div id="carouselExampleControls" className="carousel slide mt-4" data-bs-ride="carousel" style={{ height: "200px" }}>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="/Assets/banner_1.jpg" className="d-block w-100" alt="banner1" />
          </div>
          <div className="carousel-item">
            <img src="/Assets/banner_2.jpg" className="d-block w-100" alt="banner 2" />
          </div>
          <div className="carousel-item">
            <img src="/Assets/banner_3.jpg" className="d-block w-100" alt="banner 3" />
          </div>
          <div className="carousel-item">
            <img src="/Assets/banner_4.jpg" className="d-block w-100" alt="banner 4" />
          </div>
          <div className="carousel-item">
            <img src="/Assets/banner_5.jpg" className="d-block w-100" alt="banner 5" />
          </div>
          <div className="carousel-item">
            <img src="/Assets/banner_8.jpg" className="d-block w-100" alt="banner 8" />
          </div>
        </div>
        <button className="carousel-control-prev" type="button"data-bs-target="#carouselExampleControls"data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button"data-bs-target="#carouselExampleControls" data-bs-slide="next" >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      {/* Banner Section */}
      <div className="mt-4">
        <img src="/Assets/banner_7.jpg" className="bann d-block w-100" alt="banner 7" />
      </div>
    </div>
  );
};

export default Home;
