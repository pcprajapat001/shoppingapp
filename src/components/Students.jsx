import React, { useEffect, useState } from "react";
import axios from "axios";
import { Grid, Card, CardContent, Typography } from "@mui/material";

export const Students = () => {
  const [data, setData] = useState([]);

  const getApi = async () => {
    const result = await axios.get("http://localhost:4030/students");
    setData(result.data);
  };

  useEffect(() => {
    getApi();
  }, []);
  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Typography variant="h4" align="center">
          Students
        </Typography>
      </Grid>
      {data.map((item) => {
        return (
          <Grid item xs={4}>
            <Card sx={{ bgcolor: "#8ede7e" }}>
              <CardContent>
                <h3>Name: {item.name}</h3>
                <h5> Age: {item.age}</h5>
                <h6> Gender: {item.gender}</h6>
              </CardContent>
            </Card>
          </Grid>
        );
      })}
    </Grid>
  );
};
