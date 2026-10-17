import User from "./User";
// import UserClass from "./UserClass";
import React from "react";
// import UserContext from "../utils/UserContext";

class About extends React.Component {
  constructor(props) {
    super(props);
    //* console.log("Parent Constructor");
  }

  componentDidMount() {
    //* console.log("Parent Component Did Mount");
  }

  render() {
    //* console.log("Parent Render");
    return (
      <div>
        <h1>About Us</h1>
        {/* UserContext demo: class components read context with <Context.Consumer>
        <div>
          <UserContext.Consumer>
            {({ loggedInUser }) => <p>Welcome, {loggedInUser}!</p>}
          </UserContext.Consumer>
        </div> */}
        <p>This is the About page.</p>
        <User name={"Suyash"} location={"Banglore"} />
      </div>
    );
  }
}

export default About;
