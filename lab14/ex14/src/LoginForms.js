import React, { useState } from "react";
import "./styles.css";

    const LoginForms = () => {
        // State for form fields
        const [formData, setFormData] = useState({
          username: "",
          password: "",
          city: "",
          server: "",
          role: "",
          signOn: [],
        });
      
        // Handle input changes
        const handleChange = (e) => {
          const { name, value, type, checked } = e.target;
          
          if (type === "checkbox") {
            setFormData((prevData) => ({
              ...prevData,
              signOn: checked
                ? [...prevData.signOn, value]
                : prevData.signOn.filter((item) => item !== value),
            }));
          } else {
            setFormData((prevData) => ({ ...prevData, [name]: value }));
          }
        };
      
        // Handle form submission
        const handleSubmit = (e) => {
          e.preventDefault();
          alert("Form Submitted: " + JSON.stringify(formData, null, 2));
        };
      
        // Handle form reset
        const handleReset = () => {
          setFormData({
            username: "",
            password: "",
            city: "",
            server: "",
            role: "",
            signOn: [],
          });
        };
      
        return (
          <>
          <div style={{ width: "400px", margin: "auto", fontFamily: "Arial" }}>
            <h2 style={{ textAlign: "center" }}>Novell Services Login</h2>
            <form onSubmit={handleSubmit}>
              {/* Username */}
              <label>Username:</label>
              <input type="text" name="username" value={formData.username} onChange={handleChange} required />
              
              {/* Password */}
              <label>Password:</label>
              <input type="password" name="password" value={formData.password} onChange={handleChange} required />
              
              {/* City */}
              <label>City of Employment:</label>
              <input type="text" name="city" value={formData.city} onChange={handleChange} />
              
              {/* Web Server Selection */}
              <label>Web server:</label>
              <select name="server" value={formData.server} onChange={handleChange}>
                <option value="">-- Choose a server --</option>
                <option value="server1">Server 1</option>
                <option value="server2">Server 2</option>
                <option value="server3">Server 3</option>
              </select>
      
              {/* Role Selection */}
              <label>Please specify your role:</label>
              <div>
                <input type="radio" name="role" value="Admin" checked={formData.role === "Admin"} onChange={handleChange} /> Admin
                <input type="radio" name="role" value="Engineer" checked={formData.role === "Engineer"} onChange={handleChange} /> Engineer
                <input type="radio" name="role" value="Manager" checked={formData.role === "Manager"} onChange={handleChange} /> Manager
                <input type="radio" name="role" value="Guest" checked={formData.role === "Guest"} onChange={handleChange} /> Guest
              </div>
      
              {/* Single Sign-On Options */}
              <label>Single Sign-on to the following:</label>
              <div>
                <input type="checkbox" name="signOn" value="Mail" checked={formData.signOn.includes("Mail")} onChange={handleChange} /> Mail
                <input type="checkbox" name="signOn" value="Payroll" checked={formData.signOn.includes("Payroll")} onChange={handleChange} /> Payroll
                <input type="checkbox" name="signOn" value="Self-service" checked={formData.signOn.includes("Self-service")} onChange={handleChange} /> Self-service
              </div>
      
              {/* Buttons */}
              <button type="submit">Login</button>
              <button type="button" onClick={handleReset}>Reset</button>
            </form>
          </div>
          </>
        );
      };



export default LoginForms;
