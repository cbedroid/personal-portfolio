import "@testing-library/jest-dom/extend-expect";

Object.defineProperty(window, "scrollTo", { value: jest.fn(), writable: true });
Object.defineProperty(window, "REACT_ENV", { value: {}, writable: true });

// Fix jest test error "Warning: unstable_flushDiscreteUpdates: Cannot flush
// updates when React is already rendering."
// Remove video attributes auto testing
//https://github.com/testing-library/react-testing-library/issues/470
Object.defineProperty(HTMLMediaElement.prototype, "muted", {
  set: () => {},
});
Object.defineProperty(HTMLMediaElement.prototype, "autoPlay", {
  set: () => {},
});
Object.defineProperty(HTMLMediaElement.prototype, "loop", {
  set: () => {},
});

// Hide console error do not mock out API calls with axios.
Object.defineProperty(window, "XMLHttpRequest", {
  open: jest.fn(),
  send: jest.fn(),
  setRequestHeader: jest.fn(),
  readyState: 4,
  status: 200,

  response: null,
});
