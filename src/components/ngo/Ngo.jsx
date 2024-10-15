import React from 'react';
import './Ngo.css';
import './Ngo2.css';
import donation from '../../assets/donation.png';
import track from '../../assets/track.png';
import prime from '../../assets/prime.png';
import team from '../../assets/team.png';
import ngo from '../../assets/ngo.jpg';
import howitworks from '../../assets/howitworks.png';
const Ngo = () => {
    return (
        <div>
            <header className="tm-header" id="tm-header">
                <div className="tm-header-wrapper">
                    <button className="navbar-toggler" type="button" aria-label="Toggle navigation">
                        <i className="fas fa-bars"></i>
                    </button>
                    <div className="tm-site-header">
                        <div className="mb-3 "><i className="fas fa-times fa-2x"></i></div>
                        <h1 className="text-center">A Step Towards the Change!</h1>
                    </div>
                    <nav className="tm-nav" id="tm-nav">
                        <ul>
                            <li className="tm-nav-item active">
                                <a href="index.html" className="tm-nav-link">
                                    <i className="fas fa-home"></i> Donation Home
                                </a>
                            </li>
                            <li className="tm-nav-item">
                                <a href="post.html" className="tm-nav-link">
                                    <i className="fas fa-pen"></i> Donate Your Clothes
                                </a>
                            </li>
                            <li className="tm-nav-item">
                                <a href="about.html" className="tm-nav-link">
                                    <i className="fas fa-users"></i> How It Works
                                </a>
                            </li>
                            <li className="tm-nav-item">
                                <a href="contact.html" className="tm-nav-link">
                                    <i className="far fa-comments"></i> Supporting NGOs
                                </a>
                            </li>
                        </ul>
                    </nav>
                      {/* <div className="tm-mb-65">
                          <a rel="nofollow" href="https://fb.com/templatemo" className="tm-social-link">
                              <i className="fab fa-facebook tm-social-icon"></i>
                          </a>
                          <a href="https://twitter.com" className="tm-social-link">
                              <i className="fab fa-twitter tm-social-icon"></i>
                          </a>
                          <a href="https://instagram.com" className="tm-social-link">
                              <i className="fab fa-instagram tm-social-icon"></i>
                          </a>
                          <a href="https://linkedin.com" className="tm-social-link">
                              <i className="fab fa-linkedin tm-social-icon"></i>
                          </a>
                      </div> */}
                    <p className="tm-mb-80 pr-5 text-white">
                    Whatever you told us to donate, we make sure is recieved by the deserving people!
                    </p>
                </div>
            </header>
            <div className="container-fluid">
                <main className="tm-main">
                    {/* Search form */}
                    <div className="row tm-row">
                        <div className="col-12">
                              <form method="GET" className="form-inline tm-mb-80 tm-search-form">
                              <input className="form-control tm-search-input" name="query" type="text" placeholder="Search..." aria-label="Search" />
                              <button className="tm-search-button" type="submit">
                              <i className="fas fa-search tm-search-icon" aria-hidden="true"></i>
                              </button>
                              </form>
                        </div>
                    </div>
                    <div className="row tm-row">
                        {posts.map((post, index) => (
                            <article key={index} className="col-12 col-md-6 tm-post">
                                <hr className="tm-hr-primary" />
                                <a href="post.html" className="effect-lily tm-post-link tm-pt-60">
                                    <div className="tm-post-link-inner">
                                        <img src={post.img} alt={post.title} className="img-fluid" />
                                    </div>
                                    <h2 className="tm-pt-30 tm-color-primary tm-post-title">{post.title}</h2>
                                </a>
                                <p className="tm-pt-30">{post.description}</p>
                                <div className="d-flex justify-content-between tm-pt-45">
                                    <span className="tm-color-primary">{post.category}</span>
                                    <span className="tm-color-primary">{post.date}</span>
                                </div>
                                <hr />
                            </article>
                        ))}
                    </div>
                    <div className="row tm-row tm-mt-100 tm-mb-75">
                        <div className="tm-prev-next-wrapper"></div>
                        <div className="tm-paging-wrapper">
                            <nav className="tm-paging-nav d-inline-block">
                                <ul></ul>
                            </nav>
                        </div>
                    </div>
                    <footer className="row tm-row">
                        <hr className="col-12" />
                        <div className="col-md-6 col-12 tm-color-gray"></div>
                    </footer>
                </main>
            </div>
            <script src="js/jquery.min.js"></script>
            <script src="js/templatemo-script.js"></script>
        </div>
    );
};

// Sample data for posts
const posts = [
    {
        img: track,
        title: 'Track Your Donation',
        description: 'Check the status of your clothes on the way to their new owners.',
    },
    {
        img: donation,
        title: 'Donate Manually',
        description: 'We believe in personal connection. Drop your items at the NGOs yourself!',
    },
    {
        img: team,
        title: 'Meet the Team',
        description: 'Introducing you to the extraordinary team at TrendNGO!',
    },
    {
        img: ngo,
        title: 'Meet the NGOs',
        description: 'Take a look at the NGOs where we supply your clothes and well-wishes!',
    },
    {
        img: howitworks, // Optional: Add an image if available
        title: 'How It Works',
        description: 'Understand our policies and process.',
    },
    {
        img: prime,
        title: 'Join Prime',
        description: 'Join our prime membership and help us reach out to more people.',
    },
];

export default Ngo;