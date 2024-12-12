import React from 'react'
// import { NavLink } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import './Navbar.css'

function Navabar_main() {
  return (
    <>
      <div className="main-container">
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
              <div className="navbar-brand" href="#">
              
                <h4 className="d-inline ms-3 logo-title">Super Market</h4>
              </div>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                       <NavLink to='/'> Home</NavLink>
                  </li>
                  <li className="nav-item">
                       <NavLink to='/Products'>Products</NavLink> 
                  </li>
                  <li className="nav-item">
                        <NavLink to='/Dashboard'>DashBoard</NavLink>    
                  </li>
                  <li className="nav-item">
                        <NavLink to='/contacts'>Contact</NavLink>    
                  </li>
                </ul>
                <form className="d-flex me-4" role="search">
                  <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                  <button className="btn btn-outline-success" type="submit">Search</button>
                </form>
              </div>
            </div>
        </nav>
    </div>
    </>
  )
}

export default Navabar_main