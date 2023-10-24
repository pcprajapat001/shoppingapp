import React from "react";
import { Card, CardContent, Grid, Button } from "@mui/material";
import { navData } from "./navData";
import { Link } from "react-router-dom";
    
export const Nav=()=>{
    return(
        <Card sx={{marginBottom: 3}}>
            <CardContent>
                <Grid container spacing={2}>
                    {
                        navData.map((item)=>{
                            return(
                                <Grid item xs={item.xs}>
                                    <Link to={item.path}>
                                        <Button variant="contained" fullWidth>{item.label}</Button>
                                    </Link>
                                </Grid>
                            );
                        })
                    }
                </Grid>
            </CardContent>
        </Card>
    );
}