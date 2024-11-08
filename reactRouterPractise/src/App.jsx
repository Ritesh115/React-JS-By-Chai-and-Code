import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Dashboard from "./components/Dashboard";
import Navbar from "./components/Navbar";
import Product from "./components/Product";
import Navigate from "./components/Navigate";

const router = createBrowserRouter([
  {
    path: "/",
    //jab ye wala path / aap choose karanga tab konsa page app render karwana chata ho ..dal do element me
    //path kon sa hoga and element konsa load karwana hai.
    element: (
      <div>
        <Navbar />
        <Home />
      </div>
    ),
  },
  {
    path: "/about",
    element: (
      <div>
        <Navbar />
        <About />
      </div>
    ),
  },
  {
    path: "/dashboard",
    element: (
      <div>
        <Navbar />
        <Dashboard />
      </div>
    ),
  },
  {
    path: "/Product/:id",
    element: (
      <div>
        <Navbar />
        <Product />
      </div>
    ),
  },
  {
    path: "/navigate",
    element: (
      <div>
        <Navbar />
        <Navigate />
      </div>
    ),
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
