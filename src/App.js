import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { RouterProvider, createBrowserRouter, Outlet } from "react-router-dom";
// import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import Button from "./components/Button";
// import Grocery from "./components/Grocery";
const Applist = () => {
  return (
    <div>
      <Header />
      <Outlet />
     
    </div>
  );
};

const About= lazy(()=>import("./components/About"))
const Grocery = lazy(()=>import( "./components/Grocery"))
const approuter = createBrowserRouter([
  {
    path: "/",
    element: <Applist />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element:<Suspense fallback={<h1>Loading....</h1>}><About /></Suspense> ,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
           path:"/grocery",
           element:<Suspense fallback={<h1>This is Loading please wait....😁</h1>}><Grocery/></Suspense>
      },
      {
        path: "/restaurantmenu/:resID",
        element: <RestaurantMenu />,
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={approuter} />);
export default Applist;
