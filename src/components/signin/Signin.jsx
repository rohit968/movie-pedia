import React, { useState } from "react";
import { Link } from "react-router-dom";
import signupImage from "../../assets/signup_image.jpg";
import "./signin.scss";

function Signin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission
  };

  return (
    <div
      className="signin-container"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${signupImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center cover",
        filter: "blur(0.4)",
      }}
    >
      <form onSubmit={handleSubmit}>
        <h2>Sign In</h2>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </div>
        <button type="submit">Sign In</button>
        <p>
          Need to register first ?
          <span>
            <Link to="/signup" className="link">
              Sign Up
            </Link>
          </span>
        </p>
      </form>
    </div>
  );
}

export default Signin;
