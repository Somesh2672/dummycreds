import React, { useEffect, useState } from "react";

const Login = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Retrieve user data from localStorage
    const storedUser = JSON.parse(localStorage.getItem("user"));

    // Check if user data is available
    if (storedUser) {
      setUser(storedUser);
    } else {
      // Handle the case where user data is not available
      console.log("User data not found.");
    }
  }, []);

  return (
    <div className="Login">
      <h1>Logged In</h1>
      {user && (
        <>
          <h4>Id: {user.id}</h4>
          <h4>FirstName: {user.firstName}</h4>
          <h4>LastName: {user.lastName}</h4>
          <h4>Gender: {user.gender}</h4>
        </>
      )}
    </div>
  );
};

export default Login;
