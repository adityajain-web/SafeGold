import React from 'react';

const DProcedureCommon = (props) => {
    return (<><div className="col-4 d-flex flex-column align-items-center py-1">
        <i className={props.icon}></i>
        <p className="text-muted text-center">{props.text}</p>
    </div></>);
}

export default DProcedureCommon;