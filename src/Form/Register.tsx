import React, { useState } from "react";
import Style from "../style/register.module.scss";

const Register = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    number: "",
    companyName: "",
    password: "",
  });
  const [error, setError] = useState({
    nameError: "",
    emailError: "",
    numberError: "",
    companyNameError: "",
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

    const newError = {
      nameError: "",
      emailError: "",
      numberError: "",
      companyNameError: "",
      passwordError: "",
    };

    let isValid = true;

    if (data.name === "") {
      newError.nameError = "Please Enter Name";
      isValid = false;
    }
    if (data.email === "") {
      newError.emailError = "Please Enter Email";
      isValid = false;
    }
    if (data.number === "") {
      newError.numberError = "Please Enter Number";
      isValid = false;
    } else if (data.number.length !== 10) {
      newError.numberError = "Please Enter 10 Digits Number";
      isValid = false;
    }

    if (data.companyName === "") {
      newError.companyNameError = "Please Enter Company Name ";
      isValid = false;
    }

    if (data.password === "") {
      newError.passwordError = "Please Enter Password";
      isValid = false;
    }

    if (!isValid) {
      setError(newError);
      return;
    }

    const option: RequestInit = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: data.name,
        email: data.email,
        number: data.number,
        company_name: data.companyName,
        password: data.password,
      }),
    };

    fetch("http://127.0.0.1:8000/api/register", option)
      .then((res) => {
        return res.json();
      })
      .then((value) => {
        if (value.message) {
          alert(value.message);
          window.location.pathname = "/login";
        } else {
          alert(value.message);
        }
      });
  };
  return (
    <div className={Style.Container}>
      <div className={Style.wrapper}>
        <div className={Style.content}>
          <h2>
            <span style={{ color: "rgb(225, 119, 26)" }}>Sign Up</span> to Get
            The Best
            <br /> Deals,{" "}
            <span style={{ color: "rgb(226 27 34)" }}>Exclusive</span> Offers
            with
            <br /> TradeIndia
          </h2>
          <div className={Style.Image}>
            <img
              src="https://www.tradeindia.com/images/default/ti-signup.svg"
              alt=""
            />
          </div>
        </div>
        <div className={Style.formbox}>
          <div className={Style.title}>
            <h2>Sign Up</h2>
            <p>
              Create your account for free & join millions of businesses engaged
              in bulk buying and selling on India's premier B2B marketplace.
            </p>
          </div>
          <div className={Style.box}>
            <form onSubmit={handleSubmit}>
              <div className={Style.InputBox}>
                <input
                  type="text"
                  placeholder="Full Name"
                  value={data.name}
                  id="name"
                  onChange={handleChange}
                />
                <span>{error.nameError}</span>
              </div>
              <div className={Style.InputBox}>
                <input
                  type="email"
                  placeholder="Email Address"
                  value={data.email}
                  id="email"
                  onChange={handleChange}
                />
                <span>{error.emailError}</span>
              </div>
              <div className={Style.InputBox}>
                <input
                  type="number"
                  placeholder="Mobile Number"
                  value={data.number}
                  id="number"
                  onChange={handleChange}
                />
                <span>{error.numberError}</span>
              </div>
              <div className={Style.InputBox}>
                <input
                  type="text"
                  placeholder="Company Name"
                  value={data.companyName}
                  id="companyName"
                  onChange={handleChange}
                />
                <span>{error.companyNameError}</span>
              </div>
              <div className={Style.InputBox}>
                <input
                  type="password"
                  placeholder="Password"
                  value={data.password}
                  id="password"
                  onChange={handleChange}
                />
                <span>{error.passwordError}</span>
              </div>
              <button>Create Account</button>
            </form>
          </div>
          <div className={Style.bottom}>
            Already have an account ? <a href="/login">Sign In</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
