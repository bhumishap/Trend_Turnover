import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faCheckCircle, faQuestionCircle } from '@fortawesome/free-solid-svg-icons';
import CustomerIDInput from './CustomerIDInput';
import StatusDisplay from './StatusDisplay';
import Guidelines from './Guidelines';
import './QualityCheck.css';

const QualityCheck = () => {
    const [customerId, setCustomerId] = useState("");
    const [status, setStatus] = useState(null);
    const [progress, setProgress] = useState(0);
    const [showTime, setShowTime] = useState(false);
    const [faqOpen, setFaqOpen] = useState({}); // State to track open/closed FAQ items

    const handleCheckStatus = () => {
        if (customerId) {
            setStatus("In Review");
            setProgress(50);
            setShowTime(true);
        }
    };

    const timeEstimates = {
        0: "Estimated time: 5-6 business days",
        25: "Estimated time: 4-5 business days",
        50: "Estimated time: 2-3 business days",
        75: "Almost done! Estimated time: 2 business days",
        100: "Completed",
    };

    const faqs = [
        {
            question: "How long does the quality check take?",
            answer: "The quality check usually takes between 1-6 business days depending on the item's condition.",
        },
        {
            question: "What happens if my item doesn't pass?",
            answer: "If your item doesn't pass the quality check, we'll notify you; it can be either recycled or donated.",
        },
        {
            question: "Can I track my item's progress?",
            answer: "Yes, you can enter your customer ID to track the progress of your item's quality check.",
        },
    ];

    const toggleFaq = (index) => {
        setFaqOpen((prevState) => ({
            ...prevState,
            [index]: !prevState[index],
        }));
    };

    return (
        <div className="quality-check-content">
            <h1>Quality Check Status</h1>

            <div className="input-status-container">
                <CustomerIDInput
                    customerId={customerId}
                    setCustomerId={setCustomerId}
                    onCheckStatus={handleCheckStatus}
                />
                <StatusDisplay status={status} />
            </div>

            <div className="step-progress">
                <div className={`step ${progress >= 25 ? 'active' : ''}`}>Item Received</div>
                <div className={`step ${progress >= 50 ? 'active' : ''}`}>In Review</div>
                <div className={`step ${progress >= 75 ? 'active' : ''}`}>Quality Check Passed</div>
                <div className={`step ${progress === 100 ? 'active' : ''}`}>Completed</div>
            </div>

            {showTime && (
                <p className="time-estimate">
                    <FontAwesomeIcon icon={faClock} /> {timeEstimates[progress]}
                </p>
            )}

            <div className="guidelines">
                <Guidelines />
            </div>

            <div className="faqs">
                <h2>FAQs</h2>
                <ul>
                    {faqs.map((faq, index) => (
                        <li key={index} className="faq-item">
                            <div
                                className={`faq-question ${faqOpen[index] ? 'active' : ''}`}
                                onClick={() => toggleFaq(index)}
                            >
                                {faq.question}
                                <FontAwesomeIcon icon={faQuestionCircle} />
                            </div>
                            <div className={`faq-answer ${faqOpen[index] ? 'open' : ''}`}>
                                {faq.answer}
                            </div>
                        </li>
                    ))}
                </ul>
            </div> 
        </div>
    );
};

export default QualityCheck;
