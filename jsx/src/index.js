// Import the React and React Dom library
import React from "react";
import ReactDOM  from "react-dom/client";
import App from "./App";

// Get a refeerence to the div with id root
const el = document.getElementById("root")

// Tell react to take control of that element
const root = ReactDOM.createRoot(el)

// Show the component on the screen
root.render(<App/ >)

