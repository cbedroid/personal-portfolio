import { ThemeProvider } from "@mui/material/styles";
import ErrorBoundary from "components/ErrorBoundary";
import Nav from "components/Nav";
import { QueryClient, QueryClientProvider } from "react-query";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import baseTheme from "uistore/theme/baseTheme";

import "./App.css";
import HomePage from "./containers/HomePage";
import ResumePage from "./containers/resume/ResumePage";

const queryClient = new QueryClient();

function App() {
  return (
    <ThemeProvider theme={baseTheme}>
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
