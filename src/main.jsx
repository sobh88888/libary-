import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Adminform from "./pages/AdminForm/Adminform.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Index from "./pages/Home/Index.jsx";
import Contactus from "./pages/ContactUs/Contactus";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Index />,
      },
      {
        path: "/admin",
        element: <Adminform />,
      },
      {
        path: "/contactus",
        element: <Contactus />,
      },
    ],
  },
]);
createRoot(document.getElementById("root")).render(
  <RouterProvider router={router}></RouterProvider>
);
