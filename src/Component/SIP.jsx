import React, { useEffect } from 'react';
import SIPGiftCommon from './SIPGiftCommon';
import SIPImage from './Images/SIP.svg'
import './Gift.css'

const SIP = () => {
    useEffect(() => document.title = "Saving Plan | SafeGold")
    return (<>
        <SIPGiftCommon src={SIPImage} text="Invest in your future" para="Get started today with your gold accumulation plan, with a minimum installment amount of ₹ 100." btnText="Get started" />
    </>);
}

export default SIP;