import React from 'react';
import { useLocation } from 'react-router-dom';
import FaqQueAnsList from './FaqQueAnsList';
import HomeFaq from './FAQData';
import { BuyFaq, SellFaq } from './FAQData';

const FaQListGroup = () => {
    const location = useLocation();
    return (<>
        <ul className="list-group">
            {(location.pathname === "/") ? HomeFaq.map(item => {
                return (<><FaqQueAnsList colId={item.id} Que={item.que} Ans={item.ans} /></>)
            }) : (location.pathname === "/Buy-Gold") ? BuyFaq.map(item => {
                return (<><FaqQueAnsList colId={item.id} Que={item.que} Ans={item.ans} /></>)
            }) : (location.pathname === "/Sell-Gold") ? SellFaq.map(item => {
                return (<><FaqQueAnsList colId={item.id} Que={item.que} Ans={item.ans} /></>)
            }) : null}
        </ul>
    </>)
}

export default FaQListGroup;