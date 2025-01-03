import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./components/Login.jsx";
import ErrorPage from "./components/ErrorPage.jsx";
import Register from "./components/Register.jsx";
import UpdateCards from "./components/UpdateCards.jsx";
import AdminDashboard from "./components/AdminDashboard.jsx";
import RegisterButMaybeBetter from "./components/RegisterButMaybeBetter.jsx";
import ChartLogs from "./components/ChartLogs.jsx";
import PrivateRoute from "./Assets/data/PrivateRoutes.jsx";
import { AuthProvider } from "./Assets/data/AuthContext.jsx";
import EditWords from "./components/EditWords.jsx";
import "@radix-ui/themes/styles.css";

// //apon login save tokan in localstorage, if token dashboard, if not login
// // page
// // Define your routes
const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <App />,
      errorElement: <ErrorPage />,
    },
    {
      path: "/loginPage",
      element: <Login />,
      errorElement: <ErrorPage />,
    },
    {
      path: "/registerButBetter",
      element: <RegisterButMaybeBetter />,
      errorElement: <ErrorPage />,
    },
    {
      path: "/updateCards",
      element: <UpdateCards />,
      errorElement: <ErrorPage />,
    },
    {
      path: "/admin/",
      element: (
        <PrivateRoute>
          <AdminDashboard />
        </PrivateRoute>
      ),
      errorElement: <ErrorPage />,
    },
    {
      path: "/admin/chartLogs/",
      element: (
        <PrivateRoute>
          <ChartLogs />
        </PrivateRoute>
      ),
      errorElement: <ErrorPage />,
    },
    {
      path: "/admin/editWords/",
      element: (
        <PrivateRoute>
          <EditWords />
        </PrivateRoute>
      ),
      errorElement: <ErrorPage />,
    },
    {
      path: "/RegisterButMaybeBetter",
      element: <RegisterButMaybeBetter />,
      errorElement: <ErrorPage />,
    },
    {
      path: "/register",
      element: <Register />,
      errorElement: <ErrorPage />,
    },
  ],
  {
    future: {
      v7_startTransition: true, //v7 optimization , added 13.11.2024
      v7_skipActionErrorRevalidation: true, // Opt-in to skip revalidation after 4xx/5xx action responses, added 15.11.2024
    },
  }
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <AuthProvider>
    <React.StrictMode>
      <RouterProvider router={router} future={{ v7_partialHydration: true }} />
    </React.StrictMode>
  </AuthProvider>
);
