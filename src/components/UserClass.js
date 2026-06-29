import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        name: "Dummy Name",
        location: "Dummy Location",
        avatar_url: "Dummy Avatar",
      },
    };
    console.log(this.props.state, "Child Constructor");
  }

  async componentDidMount() {
    //* writing code for more understanding of componenetWillUnmount
    this.timer = setInterval(() => {
      console.log("Namaste React OP");
    }, 1000);

    console.log(this.props.state, "Child Component Did Mount");
    //* Api call
    const data = await fetch("https://api.github.com/users/Kumar-Suyash");
    const json = await data.json();
    // console.log(json);
    this.setState({
      userInfo: json,
    });
  }

  componentDidUpdate(prevProps, prevState) {
    console.log(this.props.state, "Child Component Did Update");
  }

  componentWillUnmount() {
    clearInterval(this.timer);
    console.log(this.props.state, "Child Component Will Unmount");
  }

  render() {
    console.log(this.props.state, "Child Render");
    const { name, location, avatar_url } = this.state.userInfo;
    return (
      <div className="user-card">
        <img src={avatar_url} alt="User Avatar" />
        <h1>Name: {name}</h1>
        <p>Location: {location}</p>
        <h4>Contact: @Ksuyash001</h4>
      </div>
    );
  }
}
export default UserClass;

/**
 * ? Lifecycle of Class Component
 *
 * child Constructor called
 * child Render called
 * child Component Did Mount called
 * child Render called
 * child Component Did Update called
 * Child Component Will Unmount
 */
