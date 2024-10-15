import React from 'react';
import './Guidelines.css';

const Guidelines = () => {
    return (
        <div className="guidelines-container">
            <h2>Guidelines for Quality Check</h2>
            <p><strong>Welcome!</strong> Here’s how you can check the status of your quality check:</p>
            <ol>
                <li><strong>Enter your Customer ID:</strong> This is required to retrieve your status. Ensure it’s in the correct format. Example: <code>12345-XYZ</code>.</li>
                <li><strong>Check Status:</strong> After entering your Customer ID, click the "Check Status" button to view your current status.</li>
                <li><strong>Status Descriptions:</strong> 
                    <ul>
                        <li><strong>In Review:</strong> Your request is currently under review. Please wait for further updates.</li>
                        <li><strong>Approved:</strong> Your request has been approved. You will receive further instructions via email.</li>
                        <li><strong>Rejected:</strong> Unfortunately, your request was not approved. Please contact support for more information.</li>
                    </ul>
                </li>
            </ol>
        </div>
    );
};

export default Guidelines;