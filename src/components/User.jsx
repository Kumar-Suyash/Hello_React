import { useEffect, useState } from "react";

//* behind the scenes, react itself using a single state object to manage all the states in the component.

const User = ({ name, location }) => {
  const { count, setCount } = useState(0);
  const { count2 } = useState(1);

  /*
   * Interview points: useEffect(async () => {}, []) not allowed
  ---------------------------------------------------------------  
   * - useEffect callback should return either nothing or a cleanup function.
   * - An async callback returns a Promise, not cleanup.
   * - React cannot use that Promise for cleanup, so the pattern becomes invalid.
   * - For async work, write an async function inside the effect and call it.
   */

  useEffect(() => {
    // Runs after the component is mounted
    const timer = setInterval(() => {
      // This runs every 1 second while the component is mounted
      console.log("User component mounted");
    }, 1000);

    // Cleanup function runs when the component is unmounted
    return () => {
      clearInterval(timer); // Stops the interval to avoid memory leaks
      console.log("User component unmounted");
    };
  }, []); // Empty dependency array means this effect runs only once after mount

  return (
    <div className="user-card">
      <h2>Count: {count}</h2>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <h2>Count2: {count2}</h2>
      <h1>Name: {name}</h1>
      <p>Location: {location}</p>
      <h4>Contact: @Ksuyash001</h4>
    </div>
  );
};
export default User;
