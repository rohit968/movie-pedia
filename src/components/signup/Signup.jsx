import React, { useState } from "react";
import { Link } from "react-router-dom";
import signupImage from "../../assets/signup_image.jpg";
import "./signup.scss";

function Signup() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission
  };

  return (
    <div
      className="signup-container"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${signupImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center cover",
        filter: "blur(0.4)",
      }}
    >
      <form onSubmit={handleSubmit}>
        <h2>Sign up</h2>
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
          />
        </div>
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
        <div className="form-group">
          <label htmlFor="confirm-password">Confirm Password:</label>
          <input
            type="password"
            id="confirm-password"
            value={confirmPassword}
            onChange={(event) => setConfirmPassword(event.target.value)}
          />
        </div>
        <button type="submit">Sign up</button>
        <p>
          Already registered ?{" "}
          <span>
            <Link to="/signin" className="link">
              Sign In
            </Link>
          </span>
        </p>
      </form>
    </div>
  );
}

export default Signup;
