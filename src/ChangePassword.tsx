import React, { useState } from "react";

const ChangePassword = () => {
  const [formData, setFormData] = useState({
    email: "",
    currentPassword: "",
    newPassword: "",
  });

  const [message, setMessage] = useState("");

  const handleChange = (e: any) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    if (!formData.email || !formData.currentPassword || !formData.newPassword) {
      setMessage("All fields are required!");
      return;
    }

    const options: RequestInit = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    };

    try {
      const response = await fetch(
        "http://localhost/php/changePassword.php",
        options
      );
      const data = await response.json();
      setMessage(data.message);
    } catch (error) {
      setMessage("An error occurred. Please try again.");
    }
  };

  return (
    <div>
      <h2>Change Password</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          id="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
        />
        <input
          type="password"
          id="currentPassword"
          placeholder="Current Password"
          value={formData.currentPassword}
          onChange={handleChange}
        />
        <input
          type="password"
          id="newPassword"
          placeholder="New Password"
          value={formData.newPassword}
          onChange={handleChange}
        />
        <button type="submit">Change Password</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default ChangePassword;
