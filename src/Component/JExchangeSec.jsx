import React from 'react';
import JExcSecRight from './JExcSRight';
import JExSecLeft from './JExSLeft';

const JExchangeSec = () => {
    return (<>
        <div className="container-fluid mb-5">
            <div className="row">
                <div className="col-lg-10 col-md-11 mx-auto">
                    <div className="row py-5">
                        <JExSecLeft />
                        <JExcSecRight />
                    </div>
                </div>
            </div>
        </div>
    </>)
}

export default JExchangeSec;