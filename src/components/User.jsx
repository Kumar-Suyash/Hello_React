import { useState } from "react";

//* behind the scenes, react itself using a single state object to manage all the states in the component.

const User = ({ name, location }) => {
  const { count } = useState(0);
  const { count2 } = useState(1);
  return (
    <div className="user-card">
      <h2>Count: {count}</h2>
      <h2>Count2: {count2}</h2>
      <h1>Name: {name}</h1>
      <p>Location: {location}</p>
      <h4>Contact: @Ksuyash001</h4>
    </div>
  );
};
export default User;
