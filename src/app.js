import React, { lazy, Suspense } from "react";
// import { useContext, useEffect, useState } from "react"; //* only used by the UserContext demo below
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
// import "../index.css";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import Shimmer from "./components/Shimmer";
// import UserContext from "./utils/UserContext";
// import Grocery from "./components/Grocery";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Cart from "./components/Cart";

//* Lazy loading the Grocery component for code splitting

//* Chunking the code into smaller bundles to improve performance and load time
//* Dynamic Bundling
//* lazy loading
//* On demand loading
//* Dynamic import

const Grocery = lazy(() => import("./components/Grocery"));
const About = lazy(() => import("./components/About"));

const AppLayout = () => {
  //* UserContext demo (createContext + useContext) - learning step before the Redux store, kept as notes
  // const [userName, setUserName] = useState();
  //
  // //* authentication
  // useEffect(() => {
  //   //* here we make an API call and send username and password
  //   const data = {
  //     name: "Suyash",
  //   };
  //   setUserName(data.name);
  // }, []);
  //
  // const { loggedInUser } = useContext(UserContext);

  return (
    <Provider store={appStore}>
      {/* <UserContext.Provider value={{ loggedInUser: userName, setUserName }}> */}
      <div className="app">
        <Header />
        <Outlet />
      </div>
      {/* </UserContext.Provider> */}
    </Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/grocery",
        element: (
          //*Lets you display a fallback until its children have finished loading.

          <Suspense fallback={<Shimmer />}>
            <Grocery />
          </Suspense>
        ),
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/restaurant/:resId",
        element: <RestaurantMenu />,
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
