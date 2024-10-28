import React, { useEffect, useState } from "react";

export default function PremiumProducts() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch("https://fakestoreapi.com/products"); // Replace with your API endpoint
      const data = await response.json();
      setProducts(data);
    };

    fetchProducts();
  }, []);

  const filteredProducts = products.filter((product) => product.price >= 110).sort((a, b) => b.price - a.price);;
  return (
   <div className="wrapper_of_Premium_Prod" id="Premium">
     <p>Our Premium Products</p>
      <div className="PremiumProducts">
      {filteredProducts?.map((item) => {
        return (
          <div id="item" key={item.id}>
            <img src={item.image} alt="product" />
            <div className="hidden_info">
              <span>
                <i className="fa-solid fa-star"></i>
                <p>
                  {item.rating.rate}/{item.rating.count}
                </p>
              </span>
              <p>{item.price}$</p>
            </div>
          </div>
        );
      })}
    </div>
   </div>
  );
}
