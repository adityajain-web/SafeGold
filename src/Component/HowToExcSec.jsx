import React from 'react';
import ExcFeatureTitle from './ExcFeatureTitle';
import JExcFeatureSecCard from './JExcFeatureSecCard';
import './HowToExcSec.css'


const HowToExcSec = () => {
    return (<>
        <div className="container-fluid mb-5">
            <div className="row">
                <div className="col-lg-10 col-md-11 mx-auto">
                    <ExcFeatureTitle />
                    <JExcFeatureSecCard />
                </div>
            </div>
        </div>
    </>)
}

export default HowToExcSec;