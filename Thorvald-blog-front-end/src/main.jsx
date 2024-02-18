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
import recipeList from "./data/recipesData/recipesData.json"
import AdventureView from "./routes/AdventureView/AdventureView.jsx"
import RecipesView from './routes/RecipesView/RecipesView.jsx'
import RecipeDescriptionsViewTemplate from './routes/RecipeDescriptionsViewTemplate/RecipeDescriptionsViewTemplate.jsx'
import RecipeDescriptionsView from './routes/RecipeDescriptionsView/RecipeDescriptionsView.jsx'
import GalleryView from './routes/GalleryView/GalleryView.jsx'
import ContactFormView from './routes/ContactFormView/ContactFormView.jsx'


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
        element: <TravelsViewTemplate />,
        children: [
          {
            index: true,
            element: <TravelsView />,
          },
          {
            path: ":travelId",
            element: <TravelView />,
            loader: ({ params }) => {
              const travelById = travelsList.filter((travel) => travel.id == params.travelId)
              return travelById
            }
          }
        ]
      },
      {
        path: "aventure",
        element: <AdventureView />
      },
      {
        path: "cuisine-dailleurs",
        element: <RecipeDescriptionsViewTemplate />,
        children: [
          {
            index: true,
            element: <RecipesView />
          },
          {
            path: ":recipeId",
            element: <RecipeDescriptionsView />,
            loader: ({ params }) => {
              const recipeById = recipeList.filter((recipe) => recipe.id == params.recipeId)
              return recipeById[0]
            }
          }
        ]
      },
      {
        path: "galerie",
        element: <GalleryView />
      },
      {
        path: "contact",
        element: <ContactFormView />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
