import React from 'react';

const Button = (props) => {
    return (<>
        <button className="btn customBtn">{props.text} <i className="fas fa-arrow-right ml-1"></i></button>
    </>)
}

export default Button;