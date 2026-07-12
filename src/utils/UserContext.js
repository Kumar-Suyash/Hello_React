import { createContext } from "react";

const UserContext = createContext({
  LoggedInUser: "Dummy Name",
});

export default UserContext;
