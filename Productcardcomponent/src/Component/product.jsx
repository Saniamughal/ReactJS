// components/ProductCards.jsx
import React from "react";
import ReactDOM  from "react-dom";
import productCard from './productCard.css';
import productImage from './ProductImages/image-product-desktop.jpg';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Product = () => {
  return (
    <div className="main-container">
    <div className="container">
      <div className="ImageContainer">
        <img className="productImg" src={productImage} alt="Product card component" />
      </div>
     <div className="infoContainer">
      <h6 className="productType">PERFUME</h6>
      <h1 className="productName">Gabrielle Essence Eau De Parfum</h1>
     <p className="productDetail">A floral, solar  and voluptuous interpretation composed by  Olivier Polge, Perfumer-Creater for the  HOUSE OF CHANEL </p> 
    
     <div className="price-detail">
     <h1 className="product-Price">$149.99</h1>
     <h5 className="discount"><s>$169.99</s></h5>
     </div>
     <button className="Cart-btn"> 
     <i className="fa-solid fa-cart-shopping"></i>
     Add to Cart</button>
     </div> 
     </div>
    </div>
  );
};

export default Product;
