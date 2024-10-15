import React from 'react';
import './Guide.css'; // Assuming you want styles in a separate CSS file

const Guide = () => {
  return (
    <div className="policy-container">
      <section className="policy-section">
        <h1 className="typewriter">A return policy is just the start; you need a resale policy for the full circle!</h1>
        <p>
          We offer a hassle-free return policy for new clothes. If you're not completely satisfied with your purchase,
          you can return any unworn, unwashed, and undamaged item within 30 days of delivery. Please ensure the original
          tags are still attached, and the item is in its original packaging.
        </p>
        <ul className="policy-list">
          <li>Items must be returned within 30 days.</li>
          <li>Original tags and packaging required.</li>
          <li>Refunds will be processed within 5-7 business days.</li>
          <li>Sale items are final and non-refundable.</li>
        </ul>
      </section>

      <section className="policy-section">
        <h2>Resale Policy</h2>
        <p>
          Ready to give your pre-loved clothes a second life? Our resale policy makes it easy for you to resell gently
          used items. Whether you're looking to make space in your wardrobe or want to share fashion with others, we
          support a sustainable fashion cycle.
        </p>
        <ul className="policy-list">
          <li>Items must be gently used, in good condition, and clean.</li>
          <li>Upload clear images and provide accurate descriptions of your items.</li>
          <li>Once sold, you will receive your payment within 3-5 business days.</li>
          <li>All resale transactions are final.</li>
        </ul>
      </section>
      
      <section className="policy-section">
        <h2>Why Choose Resell & Shop New?</h2>
        <p>
          Our platform offers the best of both worlds! You can shop for new clothes from the latest collections and
          resell your gently used items to keep fashion sustainable. Together, we can promote circular fashion and
          reduce waste.
        </p>
      </section>
    </div>
  );
};

export default Guide;
