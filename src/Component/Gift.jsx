import React, { useEffect } from 'react';
import SIPGiftCommon from './SIPGiftCommon';
import GiftImage from './Images/gift.svg';
import './Gift.css'

const Gift = () => {
    useEffect(() => document.title = "Gift Gold Or Send Gold to your loved one");
    return (<>
        <SIPGiftCommon src={GiftImage} text="Send Gold to your loved ones online in just a few clicks" btnText="Send your first gift" />
    </>);
}

export default Gift;