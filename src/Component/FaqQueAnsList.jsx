import React from 'react';
import FaqQues from './FaqQues';
import FaqAns from './FaqAns'

const FaqQueAnsList = (props) => {
    return (<>
        <li className="list-group-item border-0 border-bottom">
            <FaqQues Que={props.Que} colId={props.colId} />
            <FaqAns Ans={props.Ans} colId={props.colId} />
        </li>
    </>)
}

export default FaqQueAnsList;