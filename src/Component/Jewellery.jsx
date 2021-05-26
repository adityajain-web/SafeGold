import React, { useEffect } from 'react';
import JExchangeSec from './JExchangeSec';
import HowToExcSec from './HowToExcSec';
import Partner from './Partner';

const Jewellery = () => {
    useEffect(() => document.title = "Exchange Gold For Jewellery")
    return (<>
        <main>
            <div className="container-fluid">
                <JExchangeSec />
                <HowToExcSec />
                <Partner />
            </div>
        </main>
    </>);
}

export default Jewellery;