const LogOut = () => {
  const handleLogout = () => {
    console.log("Logout button clicked"); // Debugging
    fetch("http://localhost/php/logout.php", {
      method: "GET",
      credentials: "include",
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Logout response:", data); // Check the response
        if (data.success) {
          localStorage.removeItem("token");
          alert(data.message); // Show message after logout
        }
      })
      .catch((error) => console.error("Error logging out:", error));
  };

  return <button onClick={handleLogout}>Logout</button>;
};

export default LogOut;
