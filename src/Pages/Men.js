import React from "react";
import data from '../Data/data.json'

const Men = () => {
  
  const womenData = data.products.filter((item) => item.category.gender === "Men");

  return (
    <div>
      <h1>Mens Products</h1>
      <pre>{JSON.stringify(womenData, null, 2)}</pre>
    </div>
  );
};

export default Men;
