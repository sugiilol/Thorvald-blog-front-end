import { useRouteError } from "react-router-dom"
import Navbar from "./Components/Navbar/Navbar"

export default function ErrorPage() {

    const error = useRouteError()
    console.error(error)

    return (
        <>
            <Navbar />
            <h1>hé ho fait pas bordel !</h1>
            <p><i>{error.statusText || error.message}</i></p>
        </>
    )
}