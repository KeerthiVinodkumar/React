import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { RouterProvider, createBrowserRouter,Outlet } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
const Applist = () => {
  return (
    <div>
      <Header />
     <Outlet/>
    </div>
  );
};

const approuter=createBrowserRouter([
  {
    path:"/",
    element:<Applist/>,
    children:[
      {
      path:"/",
      element:<Body/>
      },
      {
        path:"/about",
      element:<About/>
      },
      {
        path:"/contact",
        element:<Contact/>
      }
    ],
    errorElement:<Error/>
  },
 
])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={approuter} />);
export default Applist

