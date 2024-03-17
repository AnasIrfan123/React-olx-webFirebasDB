import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";

  import Login from '../Views/Login/login'
  import Signup from '../Views/Signup/register'
  import ForgotPassword from '../Views/ForgotPassword/forgotPassword'
  import AddPost from "../Views/AddPost/addpost";
  import Dashboard from "../Views/Dashboard/dashboard"
  import Detail from '../Views/Detail/detail'

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Login/>
    },

    {
      path: "/register",
      element: <Signup/>
    },

    {
      path: "/forgotPassword",
      element: <ForgotPassword/>
    },

    {
      path: "/addPost",
      element: <AddPost/>
    },

    {
      path: "/dashboard",
      element: <Dashboard/>
    },

    {
      path: "/detail",
      element: <Detail/>
    }, // detail me :/id kxh is trhn route me he set hogi dynamic khte hn isko dynamic route ho kar e detail me jayega
  ]);

  function Router() {
    return  <RouterProvider router={router} />
  }

  export default Router;

