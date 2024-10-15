import './Shop.css';
import React from 'react';
import { Link } from 'react-router-dom';
import { clothesCollections } from '../../data/clothesCollections';

const Shop = () => {
  return (
    <div className="shop-page">
      <div className="shop-content">
        <div className="custom-select">
          <h3>Filters</h3>
          <p>Category</p>
          <select>
            <option value="all">All Categories</option>
            <option value="t-shirts">Women</option>
            <option value="jeans">Men</option>
            <option value="dresses">Boys</option>
            <option value="dresses">Girls</option>
          </select>
          <p>Type</p>
          <select>
            <option value="all">All Types</option>
            <option value="casual">Casual</option>
            <option value="formal">Formal</option>
            <option value="formal">T-Shirts</option>
            <option value="formal">Jeans</option>
            <option value="formal">Dresses</option>
          </select>
        </div>

        <div className="shop-items">
          {clothesCollections.map((item) => (
            <Link to={`/item/${item.id}`} key={item.id} className="clothing-item">
              <img src={item.img} alt={item.title} className="clothing-img" />
              <h2 className="clothing-title">{item.title}</h2>
              <p className="clothing-price">₹ {item.price}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Shop;
