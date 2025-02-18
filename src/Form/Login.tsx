import React, { useState } from "react";
import Style from "../style/login.module.scss";

const Login = () => {
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState({
    emailError: "",
    passwordError: "",
  });

  const handleChange = (e: any) => {
    const { id, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [id]: value,
    }));

    setError((prev) => ({
      ...prev,
      [`${id}Error`]:
        value.trim() === "" ? `Please enter ${id.replace("_", " ")}` : "",
    }));
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();

    let isValid = true;
    let errorMessage = {
      emailError: "",
      passwordError: "",
    };

    if (data.email === "") {
      errorMessage.emailError = "Please Enter Email";
      isValid = false;
    }

    if (data.password === "") {
      errorMessage.passwordError = "Please Enter Password";
      isValid = false;
    }

    if (!isValid) {
      setError(errorMessage);
      return;
    }

    const option: RequestInit = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: data.email,
        password: data.password,
      }),
    };

    fetch("http://127.0.0.1:8000/api/login", option)
      .then((res) =>
        res.json().then((value) => ({ status: res.status, value }))
      )
      .then(({ status, value }) => {
        if (status === 200) {
          alert(value.message);
          window.location.pathname = "/";
        } else {
          alert(value.message);
          window.location.pathname = "/register";
        }
      });
  };
  return (
    <div className={Style.container}>
      <div className={Style.wrapper}>
        <div className={Style.content}>
          <div className={Style.text}>
            <h2>Sign In</h2>
            <p>
              Sign In to Get The Best Deals, Exclusive Offers with TradeIndia
            </p>
          </div>
          <div className={Style.formbox}>
            <form onSubmit={handleSubmit}>
              <div className={Style.box}>
                <label>Email</label>
                <input
                  type="email"
                  placeholder="Enter Email"
                  value={data.email}
                  id="email"
                  onChange={handleChange}
                />
                <span>{error.emailError}</span>
              </div>
              <div className={Style.box}>
                <label>Password</label>
                <input
                  type="password"
                  placeholder="Enter Password"
                  value={data.password}
                  id="password"
                  onChange={handleChange}
                />
                <span>{error.passwordError}</span>
              </div>
              <button>Login</button>
            </form>
          </div>
        </div>
        <div className={Style.bottom}>
          Not Registered yet ? <a href="/register">Join Now</a>
        </div>
      </div>
    </div>
  );
};

export default Login;
