import React from 'react';
import './SellForm.css'; // Ensure your CSS file is correctly linked
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Import FontAwesome
import { faUser, faEnvelope, faTag, faDollarSign, faFileImage } from '@fortawesome/free-solid-svg-icons'; // Import icons

function SellForm() {
  return (
    <div className="main-block">
      <div className="left-part">
        <i className="fas fa-tags"></i>
        <h1>Resell Your Product</h1>
        <p>Enter your details and let us know which product you are reselling.</p>
      </div>
      <form action="/" className="form-container">
        <div className="title">
          <i className="fas fa-pencil-alt"></i>
          <h2>Register here</h2>
        </div>

        <div className="form-group">
          <label htmlFor="namebox" className="form-label">
            <FontAwesomeIcon icon={faUser} className="form-icon" /> Name
          </label>
          <input
            type="text"
            id="namebox"
            className="form-control"
            placeholder="Enter your name"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="emailbox" className="form-label">
            <FontAwesomeIcon icon={faEnvelope} className="form-icon" /> Email Address
          </label>
          <input
            type="email"
            id="emailbox"
            className="form-control"
            placeholder="Enter your email"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="product-name" className="form-label">
            <FontAwesomeIcon icon={faTag} className="form-icon" /> Product Name
          </label>
          <input
            type="text"
            id="product-name"
            className="form-control"
            placeholder="Enter product name"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="price" className="form-label">
            <FontAwesomeIcon icon={faDollarSign} className="form-icon" /> Price
          </label>
          <input
            type="number"
            id="price"
            className="form-control"
            placeholder="Enter price"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="textarea" className="form-label">
            <FontAwesomeIcon icon={faFileImage} className="form-icon" /> Product Description
          </label>
          <textarea
            id="textarea"
            className="form-control"
            rows="4"
            placeholder="Enter product details"
            required
          ></textarea>
        </div>

        <div className="form-group">
          <label htmlFor="upload" className="form-label">
            <FontAwesomeIcon icon={faFileImage} className="form-icon" /> Upload Product Image
          </label>
          <input
            type="file"
            id="upload"
            className="form-control"
            accept="image/*"
          />
        </div>

        <button type="submit" className="submit-button">Submit Listing</button>
      </form>
    </div>
  );
}

export default SellForm; // Move export default here