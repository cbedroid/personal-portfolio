import React, { Component } from "react";

import Button from "@mui/material/Button";

export type ErrorProps = {
  children: any;
};

export type ErrorState = {
  hasError: boolean;
};

class ErrorBoundary extends Component<ErrorProps, ErrorState> {
  constructor(props: ErrorProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="relative">
          <img
            className="max-h-screen max-w-full h-1/2 lg:h-screen w-full"
            src="assets/images/500-error.png"
            alt="Server Error"
          />
          <div className="absolute bottom-12 right-12 animate-bounce duration-300">
            <Button
              variant="contained"
              color="success"
              size="large"
              onClick={() => window.location.reload()}
            >
              <span className="font-semibold">Refresh Page</span>
            </Button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
