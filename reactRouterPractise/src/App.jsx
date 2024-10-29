import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Dashboard from "./components/Dashboard";

const router = createBrowserRouter([
  {
    path: "/",
    //jab ye wala path / aap choose karanga tab konsa page app render karwana chata ho ..dal do element me
    //path kon sa hoga and element konsa load karwana hai.
    element: <Home />,
  },
  { path: "/about", element: <About /> },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
