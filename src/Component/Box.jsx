import React from 'react';
import { useLocation } from 'react-router-dom';
import HomeBox from './HomeBox';
import BuySellBox from './BuySellBox';
import './Box.css';

const Box = (props) => {
    const location = useLocation();
    return (<>
        <div className="rounded py-4 my-5 px-4 box">
            {(location.pathname === "/") ? <HomeBox /> : (location.pathname === "/Buy-Gold" || location.pathname === "/Sell-Gold") ? <BuySellBox head={props.head} /> : null}
        </div>
    </>)
}

export default Box;