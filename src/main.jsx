import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import{Home, Magazines, Magazine, Blogs, Blogpost, Contact, Services} from "./pages/index.js";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/magazines",
        element: <Magazines />
      },
      {
        path: "/magazine/:id",
        element: <Magazine />
      },
      {
        path: "/blogs",
        element: <Blogs />
      },
      {
        path: "/blog-post/:slug",
        element: <Blogpost />
      },
      {
        path: "/contact",
        element: <Contact />
      },
      {
        path:"/services",
        element:<Services/>
      },
      
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
