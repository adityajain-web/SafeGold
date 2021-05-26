import React from 'react';
import DeliveryProcedure from './DeliveryProcedure';
import DProcedureCommon from './DProcedureCommon'
import Button from './Button';

const Procedure = DeliveryProcedure.map(item => {
    return (<><DProcedureCommon key={item.id} icon={item.icon} text={item.text} /></>);
})

const DeliveryLower = () => {
    return (<>
        <div id="Lower">
            <h5 className="text-center py-2">Do more with gold</h5>
            <div className="row">
                <div className="col-11 mx-auto">
                    <div className="row">
                        {Procedure}
                    </div>
                </div>
            </div>
            <div className="d-flex justify-content-center align-items-center" >
                <Button text="Get started" />
            </div>
        </div>
    </>)
}

export default DeliveryLower;