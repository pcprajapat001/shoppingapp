import React, { useState } from "react";
import axios from "axios";
import { Grid, TextField, Button, Typography } from "@mui/material";

export const AddAdmin = () => {
  // State variables to hold user information
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");
  const [phone, setPhone] = useState("");

  // Function to handle form submission
  const handleSubmit = () => {
    // Create a payload object with user information
    const payload = { fname, lname, email, age, phone };

    // Send a POST request to the server with the user data
    const result = axios.post("http://localhost:4030/addadmins", payload);

    // Clear the input fields after submission
    setFname("");
    setLname("");
    setEmail("");
    setPhone("");
    setAge("");
  };

  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Typography variant="h4" align="center">
          Add Admin
        </Typography>
      </Grid>
      <Grid item xs={4}></Grid>
      <Grid item xs={4}>
        {/* Text input fields for user information */}
        <TextField
          value={fname}
          onChange={(e) => setFname(e.target.value)}
          variant="outlined"
          fullWidth
          label="Enter First Name"
        />
        <TextField
          value={lname}
          onChange={(e) => setLname(e.target.value)}
          variant="outlined"
          fullWidth
          label="Enter Last Name"
        />
        <TextField
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          variant="outlined"
          fullWidth
          label="Enter Email"
        />
        <TextField
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          variant="outlined"
          fullWidth
          label="Enter Mobile number"
        />
        <TextField
          value={age}
          onChange={(e) => setAge(e.target.value)}
          variant="outlined"
          fullWidth
          label="Enter age"
        />

        {/* Button to submit the form */}
        <Button
          onClick={handleSubmit}
          fullWidth
          variant="contained"
          color="success"
        >
          Submit
        </Button>
      </Grid>
      <Grid item xs={4}></Grid>
    </Grid>
  );
};
