import React, { useState, useContext } from "react";
import { BsPersonCircle } from "react-icons/bs";
import { HiOutlineMailOpen } from "react-icons/hi";
import { RiLockPasswordFill } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../App";
import "./Signup.css";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const users = useContext(UserContext);

  const getdata = () => {
    users.setUsers([...users.users, { name, email, password }]);
    navigate("/");
  };

  return (
    <div className="container">
      <div className="column-1">
        <h1>Hello, friend!</h1>
        <div className="field">
          <BsPersonCircle className="input-icons" />
          <input
            className="input"
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="field">
          <HiOutlineMailOpen className="input-icons" />
          <input
            className="input"
            type="text"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="field">
          <RiLockPasswordFill className="input-icons" />
          <input
            className="input"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="checkbox">
          <input type="checkbox"></input>
          <p>I read and agree to Terms & Conditions</p>
        </div>
        <button type="submit" className="signup-button" onClick={getdata}>
          CREATE ACCOUNT
        </button>
        <div>
          <p className="account" onClick={() => navigate("/")}>
            Already have an account? Sign in
          </p>
        </div>
      </div>
      <div className="column-2">
        <div className="text-wraper">
          <h3 className="image-text">Glad to see you!</h3>
          <p className="text">
            Many desktop publishing and web page Ipsum search 'lorem ipsum'.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
