import React, { useState } from "react";
import "./App.css";

const Form = () => {
  const [user, setUser] = useState({ name: "", email: "", number: "" });
  const [formData, setFormData] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormData([...formData, user]);
    setUser({ name:"", email:"", number:"" });
  };

  return (
    <div>
      <div>
        <form onSubmit={handleSubmit}>
          <label>Name</label>
          <input type="text" name="name" value={user.name} onChange={handleChange} required />
          <label>Email</label>
          <input type="email" name="email" value={user.email} onChange={handleChange} required/>
          <label>Number</label>
          <input type="tel" name="number" value={user.number} onChange={handleChange} required />
          <button type="submit">Submit Form</button>
        </form>
      </div>
      <table>
        <thead className="App">
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Number</th>
          </tr>
        </thead>
        <tbody className="App1">
          {formData.map((data, index) => (
            <tr key={index}>
              <td>{data.name}</td>
              <td>{data.email}</td>
              <td>{data.number}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Form;
