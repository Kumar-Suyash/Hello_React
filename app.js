import React from "react";
import ReactDOM from "react-dom/client";

//* React Element

//! React Element is a plain JavaScript object that represents a DOM element. It is created using JSX syntax, which allows us to write HTML-like code in our JavaScript files. React elements are immutable and cannot be changed once they are created. They are used to describe what we want to see on the screen and are the building blocks of React applications.

//? parentheses are used here to wrap the multiline JSX expression
//? and make the JSX read as a single JavaScript expression
const heading = (
  <h1 id="heading" xyz="abc">
    Hello world from react through JSX
  </h1>
);

const Title = () => {
  return <h1 id="heading"> Hello world from functional component title</h1>;
};

//* React Functional Component

//! React Functional Component is a JavaScript function that returns a React element (JSX)

//* Componenet Composition

//! Component composition is the process of combining multiple components to create a new component. It allows us to build complex UIs by breaking them down into smaller, reusable components. In the example below, we have a HeadingComponent that includes both the heading and the Title component. This way, we can reuse the Title component in other parts of our application without having to duplicate code.

const HeadingComponent = () => {
  return (
    <div>
      <h1 id="heading">Hello world from functional component</h1>
      <Title />
      {heading} // we can also use the heading element here, which is a React
      element created using JSX which is added inside the parantheses
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);
root.render(<HeadingComponent />);
