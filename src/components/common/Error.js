import React from "react";
import "./Error.css";

function Error({error}) {
    return (
        <div className="error">
            <h1>Error</h1>
            <p>{error}</p>
        </div>
    );
}

export default Error;
