// src/App.js
import React, { useState } from "react";
import MapView from "./components/MapView"; // Ensure this component exists
import Navbar from "./components/Navbar"; // Ensure this component exists
import HomePage from "./components/HomePage"; // Ensure this component exists
import Login from "./components/Login"; // Ensure this component exists
import AdminPanel from "./components/AdminPanel"; // Ensure this component exists

function App() {
  const [currentView, setCurrentView] = useState("home"); // State to track current view
  const [isLoggedIn, setIsLoggedIn] = useState(false); // State to track login status

  const handleLoginClick = () => {
    setCurrentView("login"); // Switch to login view
  };

  const handleLogoClick = () => {
    setCurrentView("home"); // Switch to home view
    setTimeout(scrollToMap, 100); // Scroll to map after a short delay
  };

  const handleLoginSuccess = () => {
    setIsLoggedIn(true); // Update login status
    setCurrentView("admin"); // Redirect to Admin Panel after successful login
  };

  const handleAdminPanelClick = () => {
    setCurrentView("admin"); // Switch to Admin Panel
  };

  const scrollToMap = () => {
    const mapView = document.getElementById("map-view");
    if (mapView) {
      mapView.scrollIntoView({ behavior: "smooth" }); // Scroll to the map
    }
  };

  const renderView = () => {
    switch (currentView) {
      case "home":
        return <HomePage onExploreClick={scrollToMap} />;
      case "login":
        return <Login onLoginSuccess={handleLoginSuccess} />;
      case "admin":
        return <AdminPanel />; // Render Admin Panel
      default:
        return <HomePage onExploreClick={scrollToMap} />;
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <Navbar
          onLoginClick={handleLoginClick}
          onLogoClick={handleLogoClick}
          isLoggedIn={isLoggedIn}
          onAdminPanelClick={handleAdminPanelClick} // Pass the new prop
        />
      </header>
      <main className="App-main">{renderView()}</main>
      {currentView === "home" && ( // Show the map only when in the home view
        <div id="map-view" onClick={scrollToMap}>
          <MapView />
        </div>
      )}
    </div>
  );
}

export default App;
