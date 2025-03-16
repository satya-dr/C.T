import React, { Component } from 'react';
import './NavBar.css';
import clgLogo from './clgLogo.png'

const NavBar=()=> {
 
    return (
      <div>
         <nav className="navbar fixed-top navbar-expand-lg navbar-custom header">
        <div className="container-fluid">
            <div className="search-box">
                <input className="form-control"  type="text" placeholder="Search"/>
                {/* <i class="fa-solid fa-magnifying-glass  search-icon"></i> */}
                
            </div>
            <div className="navbar-nav">
                <img className='mx-2' src={clgLogo} alt="#" />
                <div className="nav-item">BSH | CSE || ECE | EE || ME | CE</div>
                {/* <div className="nav-item"> || </div>
                <div className="nav-item"> ECE | EE </div>
                <div className="nav-item"> || </div>
                <div className="nav-item">ME | QE</div> */}
                <img className='mx-2' src={clgLogo} alt="#" />
            </div>
            <div className="contact" style={{display:'flex',alignItems:'center',justifyContent:'center'}}>
               <div className="ml-auto">
                   <div className="nav-item mx-1" >email <i className="envelope fa-solid fa-envelope mx-1" style={{fontSize:'13px'}}></i></div>
               </div>
               <i className="linkedin fa-brands fa-linkedin-in mx-2"></i>
               <i className="instagram fa-brands fa-instagram mx-2"></i>
               <i className="facebook fa-brands fa-facebook-f mx-2"></i>
            </div>
           
        </div>
    </nav>

      </div>
    );
  };

  export default NavBar;
