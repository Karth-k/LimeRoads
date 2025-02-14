import React from "react";
import '../Styles/Sidebar.css'

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h2>Filter & Sort</h2>
      <div className="filter-section">
        <p>Sort by</p>
        <ul>
          <li>
            <input type="radio" name="sort" id="trending" />
            <label htmlFor="trending">Trending</label>
          </li>
          <li>
            <input type="radio" name="sort" id="new" />
            <label htmlFor="new">New</label>
          </li>
          <li>
            <input type="radio" name="sort" id="discounts" />
            <label htmlFor="discounts">Discounts</label>
          </li>
          <li>
            <input type="radio" name="sort" id="highPrice" />
            <label htmlFor="highPrice">High Price</label>
          </li>
          <li>
            <input type="radio" name="sort" id="lowPrice" />
            <label htmlFor="lowPrice">Low Price</label>
          </li>
        </ul>
      </div>
      <div className="filter-section">
        <p>Price</p>
        <button>+</button>
      </div>
      <div className="filter-section">
        <p>Discounts</p>
        <button>+</button>
      </div>
      <div className="filter-section">
        <p>Color</p>
        <button>+</button>
      </div>
      <div className="filter-section">
        <p>Size</p>
        <button>+</button>
      </div>
      <div className="filter-section">
        <p>Brand</p>
        <button>+</button>
      </div>
      <div className="filter-section">
        <p>Category</p>
        <button>+</button>
      </div>
      <div className="filter-section">
        <p>Type</p>
        <button>+</button>
      </div>
      <div className="filter-section">
        <p>Occasion</p>
        <button>+</button>
      </div>
      <div className="filter-section">
        <p>Prints & Patterns</p>
        <button>+</button>
      </div>
    </div>
  );
};

export default Sidebar;
