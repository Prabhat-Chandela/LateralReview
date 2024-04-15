import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store/store.js";
import{Home, Magazines, Magazine, Blogs, Blogpost, Contact, Services, PrivacyPolicy, TermsCondition} from "./pages/index.js";

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
        path: "/magazine/:magazinefile",
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
      {
        path:"/privacy-policy",
        element:<PrivacyPolicy/>
      },
      {
        path:"/terms-condition",
        element:<TermsCondition/>
      },
      
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
    <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
)
