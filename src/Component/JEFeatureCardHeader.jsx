import React from 'react';
import { FeatureTabs } from './OnlineOfflineMethodData';

const Tabs = FeatureTabs.map(item => {
    return (<><li className="nav-item" key={item.id}>
        <a className="nav-link" data-bs-toggle="tab" data-bs-target={item.to} type="button" role="tab" href={item.to}><h2 style={{ color: "#decc62" }}><img src={item.imgSrc} alt="Online" className="mr-2" />{item.title}</h2></a>
    </li></>);
})

const JEFeatureCardHeader = () => {
    return (<>
        <div className="card-header bg-transparent border-bottom card-header-tabs">
            <ul className="nav justify-content-center">
                {Tabs}
            </ul>
        </div>
    </>);
}

export default JEFeatureCardHeader;