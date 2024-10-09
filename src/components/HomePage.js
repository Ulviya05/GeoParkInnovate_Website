import React from "react";
import "../styles/HomePage.css";

const HomePage = ({ onExploreClick }) => {
  return (
    <div className="home-page">
      <div className="heading">Welcome to Our Site!</div>
      <div className="middle">
        National Park Tourist Evaluation Map SaaS Platform
      </div>
      <button onClick={onExploreClick} className="explore-button">
        Let's Explore
      </button>
    </div>
  );
};

export default HomePage;
