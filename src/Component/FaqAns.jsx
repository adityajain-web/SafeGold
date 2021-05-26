import React from 'react';

const FaqAns = (props) => {
    return (<>
        <div className="collapse" id={`collapse${props.colId}`}>
            <p className="pl-3">{props.Ans}</p>
        </div>
    </>)
}

export default FaqAns;