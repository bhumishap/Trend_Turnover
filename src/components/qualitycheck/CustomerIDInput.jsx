import React from 'react';
import "./CustomerIDInput.css";

const CustomerIDInput = ({ customerId, setCustomerId, onCheckStatus }) => {
    return (
        <div className="customer-id-input">
            <input
                className="input-field"
                type="text"
                value={customerId}
                onChange={(e) => setCustomerId(e.target.value)}
                placeholder="Enter Customer ID"
            />
            <button onClick={onCheckStatus} className="check-status-button">
                Check Status
            </button>
        </div>
    );
};

export default CustomerIDInput;