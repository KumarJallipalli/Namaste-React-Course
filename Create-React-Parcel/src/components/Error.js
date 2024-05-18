import { useRouteError } from "react-router-dom";

// This thrown an error as it is outside the component
// const err = useRouteError();

const Error = () => {
    // This "useRouteError" returns an error object [ It should be defined inside the component ]
    const err = useRouteError();
    return (
        <>
            <h1>Error..! <br/> Something went Wrong</h1>
            <h3>{err.status + " : " + err.statusText}</h3>
        </>
    )
}

export default Error;