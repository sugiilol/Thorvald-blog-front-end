import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider, } from "react-router-dom"
import ErrorPage from "./ErrorPage.jsx"
import './index.css'
import Root from "./routes/root";
import TravelsViewTemplate from "./routes/TravelsViewTemplate/TravelsViewTemplate.jsx"
import TravelsView from './routes/TravelsView/TravelsView.jsx'
import HomePageView from './routes/HomePageView/HomePageView.jsx'
import TravelView from './routes/TravelView/TravelView.jsx'
import travelsList from "./data/planetsList/planetsList.json"
import AdventureView from "./routes/AdventureView/AdventureView.jsx"

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
        path: "aventure",
        element:<AdventureView />
      },
      {
        path: "voyages",
        element: <TravelsViewTemplate />,
        children: [
          {
            index:true,
            element: <TravelsView />,
          },
          {
            path: ":travelId",
            element: <TravelView />,
            loader: ({ params }) => {
              const travelById = travelsList.filter((travel) => travel.id == params.travelId)
              console.log(travelById)
              return travelById
            }
          }
        ]
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
