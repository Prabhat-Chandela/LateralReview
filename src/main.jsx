import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter, useLocation } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store/store.js";
import { Home, Magazines, Magazine, Blogs, Blogpost, Contact, Services, PrivacyPolicy, TermsCondition } from "./pages/index.js";


const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <>
          <Home />
          <ScrollToTop />
        </>
      },
      {
        path: "/magazines",
        element: <>
          <Magazines />
          <ScrollToTop />
        </>
      },
      {
        path: "/magazine/:magazinefile",
        element: <>
          <Magazine />
          <ScrollToTop />
        </>
      },
      {
        path: "/blogs",
        element: <>
          <Blogs />
          <ScrollToTop />
        </>
      },
      {
        path: "/blog-post/:slug",
        element: <>
          <Blogpost />
          <ScrollToTop />
        </>
      },
      {
        path: "/contact",
        element: <>
          <Contact />
          <ScrollToTop />
        </>
      },
      {
        path: "/services",
        element: <>
          <Services />
          <ScrollToTop />
        </>
      },
      {
        path: "/privacy-policy",
        element: <>
          <PrivacyPolicy />
          <ScrollToTop />
        </>
      },
      {
        path: "/terms-condition",
        element: <>
          <TermsCondition />
          <ScrollToTop />
        </>
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
