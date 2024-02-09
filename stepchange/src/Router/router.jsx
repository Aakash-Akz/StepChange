import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Index from "../components/Index";
import Form1 from "../components/Form1";
import Form2 from "../components/Form2";
import Form3 from "../components/Form3";
import Thanks from "../components/Thanks";

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
        path: "/form1",
        element: <Form1 />,
      },
      {
        path: "/form2",
        element: <Form2 />,
      },
      {
        path: "/form3",
        element: <Form3 />,
      },
      {
        path: "/thankyoupage",
        element: <Thanks />,
      },
    ],
  },
]);

export default router;
