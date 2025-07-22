

import './App.css';
import Login from './components/login/Login';
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Signup from './components/signup/Signup';
import HomePage from './components/HomePage';
import AdminDashboard from './components/admin/AdminDashboard';
import About from './components/about/About';

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
  },

  {
    path: "/admin-dashboard",
    element: <AdminDashboard />},
  {
    path:"/about",
    element:<About/>

  }
  
]);

return (
  <div className="App">
    <RouterProvider router={route} />
  </div>
);

}
export default App;