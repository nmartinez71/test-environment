// src/login.jsx
import { useState } from "react";
import Input  from "../ui/Input";
import Button  from "../ui/Button";
import { Card } from "../ui/Card";
import { useNavigate } from "react-router-dom";
import "../styles.css";

function Login() {
  const navigate = useNavigate();
  const [inputs, setInputs] = useState({
    username: "",
    password: "",
    acctType: "Student"
  });

  function handleChange(event) {
    const { name, type, value, checked } = event.target;
    setInputs((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value
    }));
  }

  async function handleSubmit(event) {
    event.preventDefault(); // Prevent default form submission

    // Validation for empty fields
    if (!inputs.username || !inputs.password) {
      setError("Username and Password are required");
      return;
    }

    setLoading(true); // Set loading state
    setError(null); // Clear previous errors

    try {
      // Make the API call for authentication
      const response = await fetch("https://equinox-backend.glitch.me/api/auth", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: inputs.username,
          password: inputs.password
        }),
      });

      if (response.ok) {
        const data = await response.json();
        console.log("Login successful", data); // Handle token or response data
        // You can store the token in localStorage or context here, if necessary
        navigate("/home"); // Navigate to another page after successful login
      } else {
        const errorData = await response.json();
        throw new Error(errorData.message || "Login failed.");
      }
    } catch (error) {
      setError(error.message); // Set error message
    } finally {
      setLoading(false); // Turn off loading state
    }
  }

  return (
    <Card className="login-form">
      <h2 className="form-title">Login</h2>
      <form onSubmit={handleSubmit} className="form-group">
        <Input type="text" name="username" placeholder="Username" value={inputs.username} onChange={handleChange} />
        <Input type="password" name="password" placeholder="Password" value={inputs.password} onChange={handleChange} />
        
        <label>Account Type</label>
        <select name="acctType" value={inputs.acctType} onChange={handleChange}>
          <option value="Student">Student</option>
          <option value="Teacher">Teacher</option>
        </select>

        <Button type="submit">Login</Button>
        <Button type="button" onClick={() => navigate("/")} variant="outline">Cancel</Button>
      </form>
    </Card>
  );
}

export default Login;
