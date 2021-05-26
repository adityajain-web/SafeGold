import React from 'react';
import BuySellBoxHead from './BuySellBoxHead';
import BuySellBoxInput from './BuySellBoxInput';

const BuySellBox = (props) => {
    return (<>
        <div>
            <BuySellBoxHead head={props.head} />
            <BuySellBoxInput />
        </div>
    </>);
}

export default BuySellBox;