import React from 'react';
import JEFCImage from './JEFCImage';

const OnlineOfflineFeatureCard = (props) => {
    return (<>
        <div className="col-md-4 col-12 my-2">
            <div className="card border-0">
                <JEFCImage imgSrc={props.imgSrc} title={props.title} />
                <div className="card-body text-center">
                    <h6 className="JExFCTitle"><span className="display-6">{props.id}.</span> {props.title}</h6>
                    <p>{props.details}</p>
                </div>
            </div>
        </div>
    </>)
}

export default OnlineOfflineFeatureCard;