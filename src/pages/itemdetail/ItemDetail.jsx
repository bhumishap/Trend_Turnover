import React from 'react';
import { useParams, useNavigate } from 'react-router-dom'; // Import useNavigate
import { clothesCollections } from '../../data/clothesCollections';
import './ItemDetail.css';

const ItemDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate(); // Use useNavigate instead of useHistory
  const item = clothesCollections.find(item => item.id === parseInt(id));

  if (!item) {
    return <div>Item not found</div>;
  }

  const handleBuyClick = () => {
    // Navigate to Buyitems page with the item ID
    navigate(`/buy/${id}`);
  };

  return (
    <div className="item-detail">
      <img src={item.img} alt={item.title} className="item-img" />
      <div className="item-info">
        <h2 className="item-title">{item.title}</h2>
        <p className="item-price">₹ {item.price}</p>
        <div className="desc"><p className="item-description">{item.description}</p></div>

        {/* button for buying */}
        <div className="buy-button-container">
          <button className="buy-button" onClick={handleBuyClick}>Buy</button>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
