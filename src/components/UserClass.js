import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
    console.log("Child Constructor");
  }

  componentDidMount() {
    console.log("Child Component Did Mount");
  }

  render() {
    console.log("Child Render");
    const { name, location } = this.props;
    const { count } = this.state;
    return (
      <div className="user-card">
        <h2>Count: {count}</h2>
        <button
          onClick={() => {
            //* NEVER mutate the state directly, always use setState to update the state.
            this.setState({
              count: this.state.count + 1,
            });
          }}
        >
          Increment
        </button>
        <h1>Name: {name}</h1>
        <p>Location: {location}</p>
        <h4>Contact: @Ksuyash001</h4>
      </div>
    );
  }
}
export default UserClass;
