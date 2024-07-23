import React, { useRef, useEffect } from "react";
import "../../../assets/css/style.css";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";
const PORT = process.env.REACT_APP_MYURL;

const LoginForm = () => {
  const navigate = useNavigate();
  const uname = useRef();
  const password = useRef();
  const getUname = localStorage.getItem("unameData");

  useEffect(() => {
    if (getUname) {
      navigate("/dashboard");
    }
  }, [getUname, navigate]);

  const handleLogin = (e) => {
    e.preventDefault();
    axios
      .get(`${PORT}users?uname=${uname.current.value}`)
      .then((response) => {
        const userData = response.data[0];
        if (userData && password.current.value === userData.password) {
          localStorage.setItem("unameData", userData.uname);
          navigate("/dashboard");
        } else {
          window.confirm("Please Enter valid values");
        }
      })
      .catch((error) => {
        console.log("Error fetching Category data in Brand.js:", error);
      });
  };
  return (
    <>
      <div className="card">
        <form
          className="box absolute left-1/3 text-center mt-10 rounded-3xl"
          onSubmit={handleLogin}
        >
          <h1 className="font-mono text-3xl text-white">LOGIN FOROLLY</h1>
          <p className="text-gray-700">
            Please enter your user name and password!
          </p>
          <input
            type="text"
            placeholder="Username"
            className="bg-transparent block text-center p-2 outline-0 text-white rounded-3xl"
            ref={uname}
          />
          <input
            type="password"
            placeholder="Password"
            className="bg-transparent block text-center p-2 outline-0 text-white rounded-3xl"
            ref={password}
          />
          <NavLink className="underline text-gray-700" to="/admin">
            Forgot password?
          </NavLink>
          <input
            type="submit"
            className="block px-8 text-white rounded-3xl cursor-pointer py-3"
            value="Login"
          />
        </form>
      </div>
    </>
  );
};

export default LoginForm;
