import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider, } from "react-router-dom"
import ErrorPage from "./ErrorPage.jsx"
import './index.css'
import Root from "./routes/root";
import TravelsView from './routes/TravelsView/TravelsView.jsx'
import HomePageView from './routes/HomePageView/HomePageView.jsx'
import TravelView from './routes/TravelView/TravelView.jsx'

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
        path: "voyages",
        element: <TravelsView />,
        children: [
          {
            path: ":travelId",
            element: <TravelView />,
            loader :  async () => {
              return fetch('./data/planetsList/planetsList.json')
            }
          }
        ]
      },
      
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
