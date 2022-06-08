import React, { useContext, useState } from "react";
import { HiOutlineMailOpen } from "react-icons/hi";
import { RiLockPasswordFill } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../App";
import "./Signin.css";

const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const contextValue = useContext(UserContext);
  const comparedata = () => {
    const update = contextValue.users.some((user) => {
      if (user.email === email && user.password === password) {
        contextValue.setCurrentUser({ email, password });
        navigate("/welcome");
      }
    });
  };

  return (
    <div className="signin-container">
      <div className="signin-column1">
        <h1>Hello!</h1>
        <p>Sign in to your account</p>
        <div className="signin-field">
          <HiOutlineMailOpen className="signin-inputicons" />
          <input
            className="signin-input"
            type="text"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="signin-field">
          <RiLockPasswordFill className="signin-inputicons" />
          <input
            className="signin-input"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="checkbox-signin">
          <input type="checkbox"></input>
          <p className="remember-text">Remember me</p>
          <p>Forget Password</p>
        </div>
        <button className="signin-btn" type="submit" onClick={comparedata}>
          SIGN IN
        </button>
        <div>
          <p className="signin-account" onClick={() => navigate("/signup")}>
            Don't have an account? Sign up
          </p>
        </div>
      </div>
      <div className="signin-column2">
        <div className="text-wraper">
          <h3 className="signin-image-text">Welcome Back!</h3>
          <p className="signin-text">
            Many desktop publishing and web page Ipsum search 'lorem ipsum'.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signin;
