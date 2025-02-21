import React, { useState } from "react";

const Login = () => {
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e: any) => {
    const { id, value } = e.target;
    setLoginData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (loginData.email.trim() === "" || loginData.password.trim() === "") {
      setError("Please fill in all fields.");
      return;
    }

    const options: RequestInit = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: loginData.email,
        password: loginData.password,
      }),
    };

    fetch("http://localhost/php/login.php", options)
      .then((res) => res.json())
      .then((data) => {
        if (data.message === "Login successful!") {
          setSuccess(`Welcome, ${data.user}!`);
          setError("");
        } else {
          setError(data.message);
        }
      })
      .catch((err) => {
        console.error("Error:", err);
        setError("An error occurred, please try again.");
      });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={loginData.email}
          id="email"
          onChange={handleChange}
        />
        <input
          type="password"
          placeholder="Password"
          value={loginData.password}
          id="password"
          onChange={handleChange}
        />
        <button type="submit">Login</button>
      </form>
      {error && <p style={{ color: "red" }}>{error}</p>}
      {success && <p style={{ color: "green" }}>{success}</p>}
    </div>
  );
};

export default Login;
