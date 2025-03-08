import "./App.css";
import { HomePage } from "./Page/HomePage";
import { createTheme, ThemeProvider, CssBaseline } from "@mui/material";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    background: {
      default: "#000",
    },
    text: {
      primary: "white",
    },
  },
});
function App() {
  return (
    <>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <HomePage />
      </ThemeProvider>
    </>
  );
}

export default App;
