import React from 'react';

const GreeTText = (props) => {
    return (<>
        <h2 className="text-md-left text-center font-weight-light">{props.greetText}</h2>
    </>)
}

export default GreeTText;