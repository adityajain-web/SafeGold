import React from 'react';
import Online from './OnlineOfflineMethodData';
import OnlineOfflineFeatureCard from './OnlineofflineFeatureCard';

const NewOnline = Online.map(item => {
    return (<>
        <OnlineOfflineFeatureCard key={item.id} id={item.id} imgSrc={item.imgSrc} title={item.title} details={item.details} />
    </>)
})

const OnlineTabPanel = () => {
    return (<>
        <div className="tab-pane fade show active" id="online">
            <div className="row my-5">
                {NewOnline}
            </div>
        </div>
    </>);
}

export default OnlineTabPanel;