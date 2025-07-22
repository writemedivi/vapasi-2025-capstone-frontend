

import './App.css';
import Login from './components/login/Login';
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Signup from './components/signup/Signup';
import HomePage from './components/HomePage';

function App() {
const route = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />   // <-- default route now shows HomePage
  },
  {
    path: "/login",
    element: <Login />
  },
  {
    path: "/signup",
    element: <Signup />     // moved signup to a separate path
  }
]);

return (
  <div className="App">
    <RouterProvider router={route} />
  </div>
);

}
export default App;