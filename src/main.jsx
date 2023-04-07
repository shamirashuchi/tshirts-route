//https://hard-boys.surge.sh/review
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Components/Home/Home';
import Main from './Components/Layout/Main';
import Orderreview from './Components/Orderreview/Orderreview';
import Grandpa from './Components/Grandpa/Grandpa';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children:[
      {
        path:'/',
        element:<Home></Home>,
        loader: () => fetch('Tshirts.json')
      },
      {
        path:'review',
        element:<Orderreview></Orderreview>
      },
      {
        path:'grandpa',
        element:<Grandpa></Grandpa>
      }
    ]
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
