import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import { useParams } from 'react-router'
import './details.css/detail.css'
export default function Details() {
     const {itemId} = useParams();
     const [item, setItem] = useState({});
     useEffect(()=>{
          fetch(`https://fakestoreapi.com/products/${itemId}`)
          .then((res) => res.json())
          .then((json) => setItem(json));
     },[])
     console.log(item);

  return (
    <div className='Details'>
     <Navbar/>
     <div key={item.id} className='itemCard'>
         <div className="item_C-child-1">
          <img src={item.image} alt="image" />
         </div>
         <div className="item_C-child-2">
          <h1>{item.title}</h1>
          <p><strong>Category:</strong> {item.category}</p>
          <p><strong>Price:</strong> {item.price}</p>
          <p><strong>Rating:</strong> {item.rating?.rate}</p>
          <p><strong>Votes:</strong> {item.rating?.count}</p>
          <p>{item.description}</p>
         </div>
     </div>
    </div>
  )
}
