import React from 'react';
import OnlineTabPanel from './OnlineTabPanel';
import OfflineTabPanel from './OfflineTabPanel';

const JEFCardBodyTabContent = () => {
    return (<>
        <div className="tab-content">
            <OnlineTabPanel />
            <OfflineTabPanel />
        </div>
    </>);
}

export default JEFCardBodyTabContent;