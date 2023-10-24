import React, {useState} from "react";
import axios from "axios";
import { Grid, TextField, Button} from "@mui/material";

export const AddUser=()=>{
    const [fname,setFname]=useState("");
    const [lname,setLname]=useState("");
    const [email,setEmail]=useState("");
    const [age,setAge]=useState("");
    const [phone,setPhone]=useState("");

    const handleSubmit =()=>{
        const payload = {fname,lname,email,age,phone}
        const result = axios.post("http://localhost:4030/addusers",payload);
        setFname("");
        setLname("");
        setEmail("");
        setPhone("");
        setAge("");
        
    }

    return(
        <Grid container spacing={3}>
            <Grid item xs={4}></Grid>
            <Grid item xs={4}>
                <TextField value={fname} onChange={(e)=>setFname(e.target.value)} variant="outlined" fullWidth label="Enter First Name" />
                <TextField value={lname} onChange={(e)=>setLname(e.target.value)} variant="outlined" fullWidth  label="Enter Last Name" />
                <TextField value={email} onChange={(e)=>setEmail(e.target.value)} variant="outlined" fullWidth  label="Enter Email" />
                <TextField value={phone} onChange={(e)=>setPhone(e.target.value)} variant="outlined" fullWidth  label="Enter Mobile number " />
                <TextField value={age} onChange={(e)=>setAge(e.target.value)} variant="outlined" fullWidth label="Enter age " />
                <Button onClick={handleSubmit} fullWidth variant="contained" color="success">submit</Button>
            </Grid>
            <Grid item xs={4}></Grid>
        </Grid>
    );
}