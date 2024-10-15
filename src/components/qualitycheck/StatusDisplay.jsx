import React from "react";
import "./StatusDisplay.css";

const StatusDisplay = ({ status }) => {
    return (
        <div className="status-display">
            {status ? <p>Status: {status}</p> : <p>Please enter a Customer ID to check the status.</p>}
        </div>
    );
};

export default StatusDisplay;