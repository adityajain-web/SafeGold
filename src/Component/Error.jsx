import React, { useEffect } from 'react';
import PageNotFound from './Images/404.svg'
import './Error.css'

const Error = () => {
    useEffect(() => {
        document.title = "Page Not Found"
    })

    return (<>
        <div className="d-flex justify-content-center align-items-center flex-column" id="ErrorContainer">
            <img src={PageNotFound} alt="Error" className="mt-2 bounce" />
            <h1>Page not found...</h1>
        </div>
    </>);
}

export default Error;