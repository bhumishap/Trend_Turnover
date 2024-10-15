import React from 'react';
import './About.css'; // Assuming you have a CSS file for styling

const About = () => {
  return (
    <div className="guide-container">
      <h1 className="guide-title">What We Do</h1>
      
      <section className="guide-section">
        <h2>Resell Used Clothes</h2>
        <p>
          At our platform, we specialize in giving pre-loved clothes a second life! We curate a collection of gently used garments that are in great condition, ensuring they are stylish, affordable, and sustainable. By choosing to resell, we not only help you save money but also contribute to reducing fashion waste.
        </p>
      </section>

      <section className="guide-section">
        <h2>Recycle Unusable Clothes</h2>
        <p>
          We believe in responsible disposal of clothing items that are beyond repair. For clothes that can’t be resold, we offer recycling options to ensure that fabrics are properly repurposed and given new life, reducing their environmental impact and promoting sustainability in the fashion industry.
        </p>
      </section>

      <section className="guide-section">
        <h2>Donate to NGOs</h2>
        <p>
          We partner with NGOs to donate clothes to people in need. Your contributions help make a difference in the lives of underprivileged communities, spreading warmth and care to those who need it most. Every piece of clothing counts and goes toward making the world a better place.
        </p>
      </section>

      <section className="guide-section">
        <h2>Why Choose Us?</h2>
        <p>
          We are more than just a clothing reseller. By partnering with us, you become part of a community dedicated to sustainable fashion. We believe in a circular economy, where clothes don’t go to waste, but instead find new homes or are transformed into something useful. It’s about making smarter choices for your wardrobe and the planet.
        </p>
      </section>
    </div>
  );
}

export default About;