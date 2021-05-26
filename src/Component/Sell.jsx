import React, { useEffect } from 'react';
import GreetText from './GreetText';
import Box from './Box';
import FAQ from './FAQ';
import LiveGoldPrice from './LiveGoldPrice';

const Sell = () => {
    useEffect(() => document.title = "Sell Gold")
    return (<>
        <main>
            <div className="container-fluid my-3">
                <div className="row">
                    <div className="col-md-7 col-12">
                        <GreetText greetText="Sell Gold" />
                        <Box head="Sell in Rupees" />
                        <LiveGoldPrice />
                    </div>
                    <FAQ />
                </div>
            </div>
        </main>
    </>);
}

export default Sell;