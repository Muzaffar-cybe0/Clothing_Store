import React from 'react'
import ShowCase from '../assets/showcase.svg'
import '../Css/Introduction.css'
export default function Introduction() {
  return (
    <div className='introduction' id="introduction">
     <div>
          <p>Collections</p>
          <p>You Can Explore Ans Shop Many Differnt Collection From Various Barands Here.</p>
          <button type="button">Shop Now</button>
     </div>
     <div>
          <img src={ShowCase} alt="showcase" />
     </div>
    </div>
  )
}
