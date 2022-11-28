import { createTheme, ThemeProvider } from "@mui/material/styles";
import ErrorBoundary from "components/ErrorBoundary";
import Nav from "components/Nav";
import { QueryClient, QueryClientProvider } from "react-query";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import "./App.css";
import HomePage from "./containers/HomePage";
import ResumePage from "./containers/ResumePage";

const queryClient = new QueryClient();

const theme = createTheme({
  palette: {
    primary: {
      light: "#2196f3",
      main: "#3f51b5",
      dark: "#2c387e",
      contrastText: "#fff",
    },

    secondary: {
      light: "#ff9100",
      main: "#E25115",
      dark: "#ba000d",
      contrastText: "#b22a00",
    },
  },
});

function App() {
  // eslint-disable-next-line no-console
  console.log("LOCATION", window.location);

  return (
    <ThemeProvider theme={theme}>
      <ErrorBoundary>
        <QueryClientProvider client={queryClient}>
          <div className="App">
            <Nav />
            <main className="mt-24">
              <Router>
                <Routes>
                  <Route path="/resume" element={<ResumePage />} />
                  <Route path="/" element={<HomePage />} />
                </Routes>
              </Router>
            </main>
          </div>
        </QueryClientProvider>
      </ErrorBoundary>
    </ThemeProvider>
  );
}

export default App;
