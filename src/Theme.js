import {Box, createTheme} from "@mui/material";
import {red} from "@mui/material/colors";

const theme = createTheme({
  palette: {
    primary: {
      main: red[500],
    },
    props: {
      MuiTypography: {
        gutterBottom: true,
      },
      MuiButton: {
        variant: "outlined",
        color: "primary",
      },
      MuiPaper: {
        component: Box,
        p: 10,
        backgroundColor: "gray",
      },
    },
  },
});

export default theme;
