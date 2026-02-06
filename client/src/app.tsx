import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import { Queue } from "./pages/Queue/Queue";
import { MarketingLayout } from "./components/MarketingLayout";
import { Landing } from "./pages/Marketing/Landing";
import { Login } from "./pages/Marketing/Login";
import { PrivacyPolicy } from "./pages/Marketing/PrivacyPolicy";
import { UserAgreement } from "./pages/Marketing/UserAgreement";
import { Prices } from "./pages/Marketing/Prices";
import { AboutUs } from "./pages/Marketing/AboutUs";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MarketingLayout />,
    children: [
      {
        index: true,
        element: <Landing />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "privacy",
        element: <PrivacyPolicy />,
      },
      {
        path: "agreement",
        element: <UserAgreement />,
      },
      {
        path: "prices",
        element: <Prices />,
      },
      {
        path: "about",
        element: <AboutUs />,
      },
    ],
  },
  {
    path: "/app",
    element: <Queue />,
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <RouterProvider router={router}/>
);
