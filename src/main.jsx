import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import{Home, Magazines, Magazine, Articles, Article, Contact} from "./pages/index.js";

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
        path: "/magazine/:slug",
        element: <Magazine />
      },
      {
        path: "/articles",
        element: <Articles />
      },
      {
        path: "/article/:slug",
        element: <Article />
      },
      {
        path: "/contact",
        element: <Contact />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
