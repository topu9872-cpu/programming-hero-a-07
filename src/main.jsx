import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import { ToastContainer } from "react-toastify";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import FontPage from "./Components/fontPage/FontPage";
import RootLayout from "./Components/router/Router";
import TimeLine from "./Components/timeline/TimeLine";
import Stats from "./Components/stats/Stats";
import Modal from "./Components/modal/Modal";

const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      {
        index: true,
        loader: () => fetch("Api.json"),
        element: <FontPage />,
      },
      {
        path: "/timeline",
        element: <TimeLine />,
      },
      {
        path: "/stats",
        element: <Stats />,
      },
       {
   path: "/modal",
   element:<Modal/>,
 },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ToastContainer />
    <RouterProvider router={router} />
  </StrictMode>,
);
