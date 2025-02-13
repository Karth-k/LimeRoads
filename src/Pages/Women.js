import React from "react";
import data from '../Data/data.json'

const Women = () => {
  
  const womenData = data.products.filter((item) => item.category.gender === "Women");

  return (
    <div>
      <h1>Women's Products</h1>
      <pre>{JSON.stringify(womenData, null, 2)}</pre>
    </div>
  );
};

export default Women;
