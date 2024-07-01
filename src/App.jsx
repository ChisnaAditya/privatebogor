import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import FormRegistrasi from "./routes/FormRegister";
import Terimakasih from "./routes/Terimakasih";
import NotFound from "./routes/NotFound";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <FormRegistrasi />,
    },
    {
      path: "/terimakasih",
      element: <Terimakasih />,
    },
    {
      path: "*",
      element: <NotFound />,
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
