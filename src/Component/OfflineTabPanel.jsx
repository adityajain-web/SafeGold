import React from 'react';
import { Offline } from './OnlineOfflineMethodData';
import OnlineOfflineFeatureCard from './OnlineofflineFeatureCard';

const NewOffline = Offline.map(item => {
    return (<>
        <OnlineOfflineFeatureCard key={item.id} id={item.id} imgSrc={item.imgSrc} title={item.title} details={item.details} />
    </>)
})

const OfflineTabPanel = () => {
    return (<>
        <div className="tab-pane fade" id="offline">
            <div className="row my-5">
                {NewOffline}
            </div>
        </div>
    </>);
}

export default OfflineTabPanel;