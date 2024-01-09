import "./TravelView.scss"

import {
    Outlet,
    Link,
    useLoaderData,
  } from "react-router-dom";

export default function TravelView() {

    const {travels} = useLoaderData();
    console.log(useLoaderData())

    return (
        <>
            <h2>bienvenue</h2>
        </>
    )
}