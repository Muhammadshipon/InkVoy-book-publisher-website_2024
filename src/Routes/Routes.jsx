import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home";
import ListedBooks from "../Pages/ListedBooks";
import PagesToRead from "../Pages/PagesToRead";
import Categories from "../Pages/Categories";
import Authors from "../Pages/Authors";
import BookDetails from "../Pages/BookDetails";
import Read from "../Pages/Read";
import WishToReadBooks from "../Pages/WishToReadBooks";
import Technology from "../Pages/Technology";
import Fantasy from "../Pages/Fantasy";
import Fiction from "../Pages/Fiction";
import Error from "../Pages/Error";
import SignUp from "../Pages/SignUp";
import SignIn from "../Pages/SignIn";
import PrivateRoute from "../PrivateRoutes/PrivateRoute";




export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
   errorElement:<Error></Error>,
    children: [
      {
        path: "/",
        loader: ()=> fetch('/Books.json'),
        element:<Home></Home>
      },
      {
        path: "/listed-book",
        element: <PrivateRoute><ListedBooks></ListedBooks></PrivateRoute>,
        children: [
        {
          path:"/listed-book",
          element: <Read></Read>
        },
        {
          path:"wish-to-read",
          element: <WishToReadBooks></WishToReadBooks>
        }
        
        ]
      },
      {
        path: "/pages-to-read",
        element: <PrivateRoute><PagesToRead></PagesToRead></PrivateRoute>
      },
      {
        path : "/categories",
        element:<Categories></Categories>,
        children:[
          {
            path:"/categories",
            element:<Technology></Technology>,
            loader: ()=> fetch('/Books.json')
          },
          {
            path:"fantasy",
            element:<Fantasy></Fantasy>,
            loader: ()=> fetch('/Books.json')
          },
          {
            path:"fiction",
            element:<Fiction></Fiction>,
            loader: ()=> fetch('/Books.json')
          }
        ]
      },
      {path:"/authors",
        element:<Authors></Authors>,
        loader:()=> fetch('/Author.json')
        
      },
      {
        path:"/book-details/:id",
        element:<PrivateRoute><BookDetails></BookDetails></PrivateRoute>,
        loader:( )=> fetch(`/Books.json`),
      },
      {
        path:"/sign-up",
        element:<SignUp></SignUp>
      },
      {
        path:"/sign-in",
        element:<SignIn></SignIn>
      }
     
    ]
  },
]);