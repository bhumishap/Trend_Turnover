import React from "react";
import './Banner.css';  // Import the CSS file
import homebg from '../../assets/Home.png'; // Adjust the path according to your directory structure

const Banner = () => {
    return (
        <div 
            className='promo-section'
            style={{
                backgroundImage: `url(${homebg})`, // Apply the background image
            }}
        >
            {/* You might want to add content here, e.g., a heading or a button */}
        </div>
    );
}

export default Banner;