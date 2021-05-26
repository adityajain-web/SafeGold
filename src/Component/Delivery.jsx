import React, { useEffect } from 'react';
import DeliveryUpper from './DeliveryUpper';
import DeliveryLower from './DeliveryLower';
import './Delivery.css';

const Delivery = () => {
    useEffect(() => document.title = "Get Gold Coins Or Bars Delivered")
    return (<>
        <main>
            <div className="container-fluid d-flex justify-content-center align-items-center" id="deliveryMain">
                <div className="col-md-4 col-12 px-md-4 px-0 mx-auto" id="deliveryMainContainer">
                    <DeliveryUpper />
                    <hr />
                    <DeliveryLower />
                </div>
            </div>
        </main>
    </>);
}

export default Delivery;