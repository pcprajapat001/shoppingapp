import React, { useEffect, useState } from "react";
import axios from "axios";
import { Grid, Card, CardContent, Typography } from "@mui/material";

export const ShowAdmin = () => {
  const [data, setData] = useState([]);

  const getApi = async () => {
    const result = await axios.get("http://localhost:4030/showadmins");
    setData(result.data);
  };

  useEffect(() => {
    getApi();
  }, []);
  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Typography variant="h4" align="center">
          Show Admin
        </Typography>
      </Grid>
      {data.map((item) => {
        return (
          <Grid item xs={4}>
            <Card sx={{ bgcolor: "lightskyblue" }}>
              <CardContent>
                <h3>
                  {item.fname} {item.lname}
                </h3>
                <h5>{item.email}</h5>
                <h6>{item.age}</h6>
                <h6>{item.phone}</h6>
              </CardContent>
            </Card>
          </Grid>
        );
      })}
    </Grid>
  );
};
