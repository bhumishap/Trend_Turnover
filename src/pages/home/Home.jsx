// Home.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'; 
import Promo from '../../components/promo/Promo';
import Banner from '../../components/banner/Banner';

const Home = () => {
  return (
    <div>
        <Banner/>
        <Promo/>
    </div>
  );
};

export default Home;
