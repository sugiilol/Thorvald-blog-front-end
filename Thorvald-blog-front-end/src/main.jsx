import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider, } from "react-router-dom"
import Root from './routes/root.jsx'
import ErrorPage from "./ErrorPage.jsx"
import './index.css'
import TravelsView from './routes/TravelsView/TravelsView.jsx'
import HomePageView from './routes/HomePageView/HomePageView.jsx'


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePageView />
      },
      {
        path: "/voyages",
        element: <TravelsView />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
