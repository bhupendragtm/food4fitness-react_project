import react from 'react';
import './menu.css';

function Menu() {
  return (
    <div className="App">
     <div class="navbar">
  <a href="#home">Menu</a>
  <div class="dropdown">
    <button class="dropbtn">Order Now
      <i class="fa fa-caret-down"></i>
    </button>
    <div class="dropdown-content">
      {/* <div class="header">
        <h2>Mega Menu</h2>
      </div> */}
    
        <div class="column">
          <a href="#">Sample Boxes</a>
          <a href="#">Signature Meals</a>
          <a href="#">Custom Meal Builder</a>
          <a href="#">Cooked Bulk (Build Your Own)</a>
          <a href="#">Breakfast, Health Snacks and Treats</a>
          <a href="#">Beverages</a>
          <a href="#">Gift Certificates</a>
      </div></div></div>
  <a href="#news">Macros</a>
  <div class="dropdown">
    <button class="dropbtn">Delivery FAQS
      <i class="fa fa-caret-down"></i>
    </button>
    <div class="dropdown-content">
    
        <div class="column">
          <a href="#">How We Operate</a>
          <a href="#">Delivary Details</a>
      </div></div></div>
      <div class="dropdown">
    <button class="dropbtn">Grab And Go
      <i class="fa fa-caret-down"></i>
    </button>
    <div class="dropdown-content">
    
        <div class="column">
          <a href="#">Stocklists</a>
          <a href="#">Pickup Locations</a>
      </div></div></div>
      <a href="#news">Contact US</a>
      <a href="#news">Register</a>
      <a href="#news">Login</a>
    </div>
  </div>
  );
}

export default Menu;