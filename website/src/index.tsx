import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { HashRouter } from "react-router-dom";
import { createTheme, responsiveFontSizes } from "@mui/material";
import { ThemeProvider as LegacyThemeProvider } from "@mui/styles";
import { ThemeProvider } from "@mui/system";

let theme = createTheme({
  palette: {
    text: {
      secondary: "#424242",
      primary: "#424242",
    },
  },
});

theme = responsiveFontSizes(theme, {
  factor: 2,
});

ReactDOM.render(
  <React.StrictMode>
    <HashRouter>
      <LegacyThemeProvider theme={theme}>
        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
      </LegacyThemeProvider>
    </HashRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(console.log);
