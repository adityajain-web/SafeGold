import React, { useEffect } from 'react';
import GreetText from './GreetText';
import FAQ from './FAQ';
import Box from './Box';
import LiveGoldPrice from './LiveGoldPrice';

const Buy = () => {
    useEffect(() => document.title = "Buy Gold")
    return (<>
        <main>
            <div className="container-fluid my-3">
                <div className="row">
                    <div className="col-md-7 col-12">
                        <GreetText greetText="Buy Gold" />
                        <Box head="Buy in Rupees" />
                        <LiveGoldPrice />
                    </div>
                    <FAQ />
                </div>
            </div>
        </main>
    </>);
}

export default Buy;