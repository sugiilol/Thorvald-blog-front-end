import { useRouteError } from "react-router-dom"
import Navbar from "./Components/Navbar/Navbar"

export default function ErrorPage() {

    const error = useRouteError()
    console.error(error)

    return (
        <>
            <Navbar />
            <p>
                <i>{error.statusText || error.message}</i>
            </p>
        </>
    )
}