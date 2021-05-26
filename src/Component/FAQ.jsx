import React from 'react';
import FAQListGroup from './FAQListGroup'

const FAQ = () => {
    return (<>
        <div className="col-md-5 col-12 pt-3">
            <h5 className="pl-4" style={{ color: "#01B0A7" }}>Frequently Asked Question</h5>
            <FAQListGroup />
        </div>
    </>)
}

export default FAQ;