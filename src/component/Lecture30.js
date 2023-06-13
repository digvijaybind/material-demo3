import React from "react";
import {makeStyles} from "@mui/styles";
import {
  Box,
  Button,
  Container,
  CssBaseline,
  Grid,
  Paper,
  Typography,
} from "@mui/material";
const useStyles = makeStyles({
  responsive: {
    maxWidth: "100%",
    height: "auto",
  },
  root: {},
});
const Lecture30 = () => {
  return (
    <div>
      <CssBaseline />
      <Container component={Box} py={4}>
        <Grid spacing={3} container>
          {new Array(8).fill("").map((item, index) => (
            <Grid sm={3} item>
              <Paper component={Box} p={2}>
                <img src={`/img/${index + 1}.jpg`} alt="food" />
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
};
export default Lecture30;
