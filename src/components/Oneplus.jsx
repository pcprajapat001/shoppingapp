import React, { useEffect, useState } from "react";
import axios from "axios";
import { Grid, Card, CardContent } from "@mui/material";

export const Oneplus = () => {
  const [data, setData] = useState([]);

  const getApi = async () => {
    const result = await axios.get("http://localhost:4030/oneplus");
    setData(result.data);
  };

  useEffect(() => {
    getApi();
  }, []);
  return (
    <Grid container spacing={3}>
      {data.map((item) => {
        return (
          <Grid item xs={3}>
            <Card sx={{ bgcolor: "lightskyblue" }}>
              <CardContent>
                <h3>
                  {item.title} {item.lname}
                </h3>
                <h5>{item.name}</h5>
                <h6>{item.description}</h6>
                <h6>{item.price}</h6>
              </CardContent>
            </Card>
          </Grid>
        );
      })}
    </Grid>
  );
};
