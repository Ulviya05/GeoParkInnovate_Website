// src/components/Login.js
import React, { useState } from "react";
// Uncomment the line below when your backend is ready
// import axios from "axios";

const Login = ({ onLoginSuccess }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    // Simulated login logic
    const validUsername = "admin";
    const validPassword = "password"; // Replace with actual password

    if (username === validUsername && password === validPassword) {
      // Save user data to local storage (if needed)
      localStorage.setItem("username", username);
      localStorage.setItem("id", "12345");

      // Redirect to Admin Panel after successful login
      onLoginSuccess(); // Call the prop function to go to Admin Panel
    } else {
      alert("Invalid username or password"); // Handle invalid login
    }

    // Uncomment this code when your backend is ready
    /*
    try {
      const response = await axios.post('http://127.0.0.1:5005/user/login', {
        username,
        password,
      });
      const { data } = response;
      localStorage.setItem("username", data.user.username);
      localStorage.setItem("id", data.user._id);
      onLoginSuccess(); // Redirect to Admin Panel after login
    } catch (error) {
      console.error("Login failed", error);
      alert("Login failed. Please try again."); // Handle login failure
    }
    */
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh", // Full height of the viewport
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          maxWidth: "370px",
          margin: "0 auto",
          backgroundColor: "#fff",
          boxShadow:
            "0px 4px 8px rgba(0, 0, 0, 0.2), 0px 8px 16px rgba(0, 0, 0, 0.1)",
          borderRadius: "10px",
          padding: "20px",
        }}
      >
        <h2 style={{ marginBottom: "20px" }}>Login</h2>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          style={{
            width: "270px",
            height: "30px",
            marginBottom: "20px",
            padding: "10px",
            borderRadius: "10px",
            outline: "none",
            border: "2px solid hsl(120, 40%, 80%)", // Lighter green border
            fontSize: "15px",
          }}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{
            width: "270px",
            height: "30px",
            marginBottom: "20px",
            padding: "10px",
            borderRadius: "10px",
            outline: "none",
            border: "2px solid hsl(120, 40%, 80%)", // Lighter green border
            fontSize: "15px",
          }}
        />
        <button
          onClick={handleLogin}
          style={{
            marginTop: "5px",
            padding: "15px 120px",
            borderRadius: "30px",
            cursor: "pointer",
            transition: "background-color 0.3s, transform 0.3s",
            fontSize: "15px",
            backgroundColor: "#4CAF50", // Green background
            color: "#fff", // White text
            border: "none",
            fontWeight: "bold",
            position: "relative",
            overflow: "hidden",
            zIndex: 1,
          }}
          onMouseOver={(e) =>
            (e.currentTarget.style.backgroundColor = "#45a049")
          } // Darker green on hover
          onMouseOut={(e) =>
            (e.currentTarget.style.backgroundColor = "#4CAF50")
          } // Reset on mouse out
        >
          LOGIN
        </button>
      </div>
    </div>
  );
};

export default Login;
