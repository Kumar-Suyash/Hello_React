import User from "./User";
import UserClass from "./UserClass";

const About = () => {
  return (
    <div>
      <h1>About Us</h1>
      <p>This is the About page.</p>
      <User name={"Ksuyash (function)"} location={"Banglore"} />
      <UserClass name={"Ksuyash (class)"} location={"Banglore"} />
    </div>
  );
};
export default About;
