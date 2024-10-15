import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { clothesCollections } from '../../data/clothesCollections';
import './Buyitems.css';

const Buyitems = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const item = clothesCollections.find((item) => item.id === parseInt(id));

    if (!item) {
        return <div>Item not found</div>;
    }

    const [formData, setFormData] = useState({
        name: '',
        address: '',
        contact: '',
        size: '',
        paymentMethod: '', // Added payment method
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Order placed successfully with ${formData.paymentMethod} payment!`);
        navigate(`/item/${id}`);
    };

    return (
        <div className="buyitems-container mt-5">
            <h2 className="buyitems-title text-center mb-4">Complete Your Order</h2>
            <div className="buyitems-info text-center">
                <h3>{item.title}</h3>
                <p>Price: ₹{item.price}</p>
                <img
                    src={item.img}
                    alt={item.title}
                    className="buyitems-image img-fluid mb-4"
                    style={{ width: '400px', height: '400px' }}
                />
            </div>

            <form onSubmit={handleSubmit} className="buyitems-form bg-light p-4 rounded shadow">
                <div className="mb-3">
                    <label className="form-label">Name:</label>
                    <input
                        type="text"
                        name="name"
                        className="form-control"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Address:</label>
                    <input
                        type="text"
                        name="address"
                        className="form-control"
                        value={formData.address}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Contact:</label>
                    <input
                        type="tel"
                        name="contact"
                        className="form-control"
                        value={formData.contact}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Size:</label>
                    <select
                        name="size"
                        className="form-select"
                        value={formData.size}
                        onChange={handleChange}
                        required
                    >
                        <option value="">Select Size</option>
                        <option value="S">Small</option>
                        <option value="M">Medium</option>
                        <option value="L">Large</option>
                        <option value="XL">Extra Large</option>
                    </select>
                </div>
                <div className="mb-3">
                    <label className="form-label">Payment Method:</label>
                    <select
                        name="paymentMethod"
                        className="form-select"
                        value={formData.paymentMethod}
                        onChange={handleChange}
                        required
                    >
                        <option value="">Select Payment Method</option>
                        <option value="Cash on Delivery">Cash on Delivery</option>
                        <option value="Credit Card">Credit Card</option>
                        <option value="Debit Card">Debit Card</option>
                        <option value="UPI">UPI</option>
                    </select>
                </div>
                <button type="submit" className="btn btn-primary">Place Order</button>
            </form>
        </div>
    );
};

export default Buyitems;
