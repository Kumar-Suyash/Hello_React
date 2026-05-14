import React from "react";
import ReactDOM from "react-dom/client";

//* React.createElement => React element =(JS Object) => HTML element

const heading = React.createElement(
  "h1",
  { id: "heading", xyz: "abc" },
  "Hello world from react",
);

//* JSX (transpiled it before it reaches the JS ) = Parcel + Babel => React.createElement => React element (JS Object) => HTML element

const jsxHeading = (
  <h1 id="heading" xyz="abc">
    Hello world from react through JSX
  </h1>
);

console.log(heading); //* Object
console.log(jsxHeading); //* Object
//* so heading and jsxHeading are same
const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);
root.render(jsxHeading);
