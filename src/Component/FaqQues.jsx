import React from 'react';

const FaqQues = (props) => {
    return (<>
        <a className="nav-link text-dark" data-bs-toggle="collapse" href={`#collapse${props.colId}`}>{props.Que}</a>
    </>)
}

export default FaqQues;