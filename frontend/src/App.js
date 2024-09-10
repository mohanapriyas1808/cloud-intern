import React, { useState } from "react";

function App() {
  const [student, setStudent] = useState({ name: "", subject: "", marks: "" });
  const [message, setMessage] = useState("");

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setStudent({ ...student, [name]: value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://backend:5000/api/students", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(student),
      });

      if (response.ok) {
        setMessage("Student data saved successfully!");
        setStudent({ name: "", subject: "", marks: "" });
      } else {
        setMessage("Failed to save data.");
      }
    } catch (error) {
      console.error("Error connecting to the server:", error); // Improved error logging
      setMessage("Error connecting to the server.");
    }
  };

  return (
    <div>
      <h2>Student Marks Form</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={student.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Subject:</label>
          <input
            type="text"
            name="subject"
            value={student.subject}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Marks:</label>
          <input
            type="number"
            name="marks"
            value={student.marks}
            onChange={handleChange}
            required
            min="0"
          />
        </div>
        <button type="submit">Submit</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
}

export default App;
