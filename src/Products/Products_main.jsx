import axios from 'axios'
import React from 'react'
import { useEffect,useState } from 'react'
// import images from '../database.json'
import '../Products/Products_main.css'

function Products_main() {
  const [Card,setCard]=useState([])
  useEffect(()=>{
    axios.get('http://localhost:3000/Cards')
    .then(res => setCard(res.data))
    .catch(err => console.log(err))
  },[])
  return (
    <>
 
     <h1>Products</h1>
     <hr />
     <div className='grid-container'>
      {
        Card.map((card)=>(
          // <ul>
          //   <li>{price.id}</li>
          //   <li>
          //     <img src={price.image} alt={price.title} />
          //   </li>
          // </ul>
          <div className="card h-5" style={{"width": "18rem"}}>
            <img className="card-img-top h-50" src={card.image} alt="Card image cap"/>
            <div className="card-body h-0%">
              <h5 className="card-title">{card.title}</h5>
              <p className="card-text">{card.description}</p>
              <h5 className="card-text">₹ {card.price}</h5>
              <a href="#" className="btn btn-primary">Buy</a>
            </div>
          </div>
        ))
      }
     </div>
 
    </>
  )
}

export default Products_main