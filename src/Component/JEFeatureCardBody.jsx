import React from 'react';
import JEFCardBodyTabContent from './JEFCardBodyTabContent';
import Button from './Button';

const JEFeatureCardBody = () => {
    return (<>
        <div className="card-body">
            <JEFCardBodyTabContent />
            <div className="d-flex justify-content-center align-items-center">
                <Button text="Exchange on Partners Website" />
            </div>
        </div>
    </>)
}

export default JEFeatureCardBody;