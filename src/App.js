import "./App.css";
import Main from "./layout/Main";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
function App() {
  const route = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: "/",
          element: <Home></Home>,
        },
      ],
    },
  ]);
  return (
    <div className="border min-h-screen text-white max-w-screen-xl mx-auto ">
      <RouterProvider router={route}></RouterProvider>
    </div>
  );
}

export default App;
