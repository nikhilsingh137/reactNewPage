import React, { useState } from "react";
import Style from "../style/login.module.scss";

const Login = () => {
  const [data, setData] = useState({
    number: "",
  });
  const [error, setError] = useState("");

  const handleChange = (e: any) => {
    const newData = { ...data, [e.target.id]: e.target.value };
    setData(newData);
    setError((prev: any) => ({
      ...prev,
      [`${e.target.id}Error`]:
        e.target.value === ""
          ? `${
              e.target.id.charAt(0).toUpperCase() + e.target.id.slice(1)
            } is Required`
          : "",
    }));
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();

    let isValid = true;
    let errorMessage = "";

    if (data.number === "") {
      errorMessage = "Please Enter Number";
      isValid = false;
    } else if (data.number.length !== 10) {
      errorMessage = "Please Enter 10 digit Number";
      isValid = false;
    }

    if (!isValid) {
      setError(errorMessage);
      return;
    }
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
                <label>Enter Your Phone Number*</label>
                <input
                  type="number"
                  placeholder="Enter Number"
                  value={data.number}
                  id="number"
                  onChange={handleChange}
                />
                <span>{error}</span>
              </div>
              <button>Continue</button>
            </form>
          </div>
          <div className={Style.detail}>
            <h2>Login With Email & Password</h2>
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
