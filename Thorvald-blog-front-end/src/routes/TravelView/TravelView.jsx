import "./TravelView.scss"

import {useLoaderData,} from "react-router-dom";

export default function TravelView() {

    const travels = useLoaderData();
    
    return (
        <>
            <h2>bienvenue sur {travels[0].planet}</h2>
            <p>{travels[0].title}</p>
        </>
    )
}