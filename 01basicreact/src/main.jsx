import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);

//OPTIONAL
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <StrictMode>
//     <App />
//   </StrictMode>
// );
