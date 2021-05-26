import React from 'react';
import DeliveryTruck from './Images/delivery-truck.svg';

const DeliveryUpper = () => {
    return (<>
        <div className="pt-3" id="upper">
            <div className="row">
                <div className="col-md-12 col-3 order-md-1 order-2 d-flex justify-content-center align-items-center">
                    <img src={DeliveryTruck} alt="Delivery-Truck" />
                </div>
                <div className="col-md-12 col-9 order-md-2 order-1 text-center">
                    <h2>Get your gold delivered to your doorstep</h2>
                    <p className="text-muted mt-md-3">Get gold coins or bars delivered to your doorstep without the hassle of storage</p>
                </div>
            </div>
        </div>
    </>)
}

export default DeliveryUpper;