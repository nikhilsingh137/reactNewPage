import React, { useState } from "react";

const FormPost = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    number: "",
    password: "",
  });
  const [error, setError] = useState({
    nameError: "",
    emailError: "",
    numberError: "",
    passwordError: "",
  });
  const [successMessage, setSuccessMessage] = useState("");

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
      passwordError: "",
    };

    let isValid = true;

    // Basic validations
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

    if (data.password === "") {
      newError.passwordError = "Please Enter Password";
      isValid = false;
    }

    if (!isValid) {
      setError(newError);
      return;
    }

    // Send data to backend
    const option = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: data.name,
        email: data.email,
        number: data.number,
        password: data.password,
      }),
    };

    fetch("http://localhost/php/postData.php", option)
      .then((res) => res.json())
      .then((value) => {
        if (value.message) {
          if (value.message === "Data with this email already exists.") {
            setError((prev) => ({
              ...prev,
              emailError: value.message,
            }));
          } else {
            setSuccessMessage(value.message);
          }
        }
      })
      .catch((err) => {
        console.error("Error:", err);
        alert("An error occurred, please try again later.");
      });
  };

  return (
    <div>
      {successMessage && <p>{successMessage}</p>}{" "}
      {/* Display success message */}
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            placeholder="Full Name"
            value={data.name}
            id="name"
            onChange={handleChange}
          />
          <span>{error.nameError}</span>
        </div>
        <div>
          <input
            type="email"
            placeholder="Email Address"
            value={data.email}
            id="email"
            onChange={handleChange}
          />
          <span>{error.emailError}</span>
        </div>
        <div>
          <input
            type="number"
            placeholder="Mobile Number"
            value={data.number}
            id="number"
            onChange={handleChange}
          />
          <span>{error.numberError}</span>
        </div>
        <div>
          <input
            type="password"
            placeholder="Password"
            value={data.password}
            id="password"
            onChange={handleChange}
          />
          <span>{error.passwordError}</span>
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default FormPost;
