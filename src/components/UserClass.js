import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      count2: 2,
    };
  }

  render() {
    const { name, location } = this.props;
    return (
      <div className="user-card">
        <h2>Count: {this.state.count}</h2>
        <h2>Count2: {this.state.count2}</h2>
        <h1>Name: {name}</h1>
        <p>Location: {location}</p>
        <h4>Contact: @Ksuyash001</h4>
      </div>
    );
  }
}
export default UserClass;
