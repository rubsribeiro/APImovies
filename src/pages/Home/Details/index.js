import { useParams } from "react-router-dom";


function Details() {


    const params = useParams()
    console.log(params.id)

    return (
        <h1>Details</h1>

    )
}

export default Details;