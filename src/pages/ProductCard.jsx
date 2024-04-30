import axios from "axios";
import React, {useContext, useEffect, useState } from "react";
import './Product.css/product.css'
import { Link } from "react-router-dom";
import GlobalStore from "../store/.store";
export default function ProductCard() {

  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => setData(res.data));
  }, []);

  const {setProducts, products} = useContext(GlobalStore);
  console.log(data);
  const saveProduct = (item)=>{
   setProducts((prev)=>([...prev, item]));
  };

  return (
    <div className="product_wrapper">
     {data.length > 0 ? data.map((product)=>{
      const title = product.title;
      const truncatedTitle = title.length > 5
    ? `${title.slice(0, 25)}...`
    : title;
      return(

        <div key={product.id} className="card">
        <div className="card__content">
          <div className="c_content-1">
            <img src={product.image} alt="image" />
          </div>
          <div className="c_content-2">
            <span className="title truncated-title">{truncatedTitle}</span>
            <div>
              <p>${product.price}</p>
              <p><i className="fa-solid fa-star star"></i>{product.rating.rate}/{product.rating.count}</p>
            </div>
          </div>
          <div className="c_content-3">
            <Link to={`/details/${product.id}`}>Read More</Link>
            <button type="button" onClick={()=> saveProduct(product)}>Save</button>
          </div>
        </div>
      </div>
      )
     }) : <h1 className="error">404 Error not Found</h1>}
    </div>
  );
}
