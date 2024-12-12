import React from 'react'
import Home_img from '/assets/library.png'
import { Link } from 'react-router-dom'
 import './Home.css'
function Title() {
  return (
    <>
      <section className="intro"> 
            <div className="intro-about int">
                <h1>Super Market</h1>
                <h3>
                    "Unleash the Power of Knowledge! Your Gateway to Infinite Stories."
                </h3>
                
            </div>
            <div className="intro-img int">
                <img src={Home_img} alt=""/>
            </div>
        </section>
        {/* <section className="best-sellers">
            <div className="seller-title"><h1>Special offers</h1></div>
            <div className="wrapper">
                <div className="card" style={{width: "18rem"}}>
                    <img  className="card-img-top" alt="..."/>
                    <div className="card-body">
                      <h5 className="card-title">Psychology of money</h5>
                      <p className="card-text">Timeless lessons on wealth, greed, and happiness doing well with money isn?t necessarily about what you know. It?s about how you behave.</p>
                      <h4 className="card-text">₹1600</h4>
                       <Link to='/' className="btn btn-primary container-fluid">Buy</Link>
                    </div>
                 </div>
             
             <div className="card" style={{width: "18rem"}}>
                <img  className="card-img-top" alt="..."/>
                <div className="card-body">
                  <h5 className="card-title">Rich dad Poor dad</h5>
                  <p className="card-text"> It advocates the importance of financial literacy (financial education), financial independence and building wealth through investing in assets.</p>
                  <h4 className="card-text">₹800</h4>
                  <Link to='/' className="btn btn-primary container-fluid">Buy</Link>
                </div>
              </div>
              <div className="card" style={{width: "18rem"}}>
                <img  className="card-img-top" alt="..."/>
                <div className="card-body">
                  <h5 className="card-title">Atomic habit</h5>
                  <p className="card-text">This breakthrough book from James Clear is the most comprehensive guide on how to change your habits and get 1% better every day.</p>
                  <h4 className="card-text">₹950</h4>
                  <Link to='/' className="btn btn-primary container-fluid">Buy</Link>
                </div>
              </div>
            </div>
        </section> */}
    </>
  )
}

export default Title