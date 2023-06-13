import {Box, Button, Container, Grid, Paper, Typography} from "@mui/material";
import React from "react";
import {makeStyles} from "@mui/styles";

const useStyles = makeStyles({
  root: {},
});

const Lecture21 = () => {
  return (
    <Container component={Box} py={4}>
      <Grid container>
        <Grid sm={4} item>
          <Paper>
            <Typography>Headline 3</Typography>
            <Typography>
              orem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap
            </Typography>
            <Button>read more </Button>
          </Paper>
        </Grid>
        <Grid sm={4} item>
          <Paper>
            <Typography>Headline 3</Typography>
            <Typography>
              orem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap
            </Typography>
            <Button>read more2 </Button>
          </Paper>
        </Grid>
        <Grid sm={4} item>
          <Paper>
            <Typography>Headline 3</Typography>
            <Typography>
              orem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap
            </Typography>
            <Button>read </Button>
          </Paper>
        </Grid>
        <Grid sm={4} item>
          <Paper>
            <Typography>Headline 3</Typography>
            <Typography>
              orem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap
            </Typography>
            <Button>Read access </Button>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};
export default Lecture21;
