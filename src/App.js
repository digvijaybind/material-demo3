import logo from "./logo.svg";
import "./App.css";
import Navbar from "./component/Navbar";
import {ThemeProvider} from "@mui/styles";
import theme from "./Theme";
import Lecture21 from "./component/Lecture21";
import Lecture30 from "./component/Lecture30";
function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Lecture30 />
      </ThemeProvider>
    </div>
  );
}

export default App;
