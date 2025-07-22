

import './App.css';
import Login from './components/login/Login';
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Signup from './components/signup/Signup';
import HomePage from './components/HomePage';

function App() {
const route = createBrowserRouter([
    {
      path: "/",
      element: <Signup />
    },
    {
      path: "/login",
      element: <Login />
    },
    {
       path: "/home",
       element: <HomePage />
    }
  ]);

  return (
    <div className="App">
      <RouterProvider router={route}></RouterProvider>
    </div>
  );
}
export default App;