import React from 'react';
import Button from './Button';

const SIPGiftCommon = (props) => {
    return (<>
        <main>
            <div className="container-fluid d-flex justify-content-center align-items-center flex-column" id="Main">
                <img src={props.src} alt="Gift" className="mb-md-2 mb-5 bounce" />
                <h4 className="text-center">{props.text}</h4>
                <p className="text-muted text-center">{props.para}</p>
                <Button text={props.btnText} />
            </div>
        </main>
    </>)
}

export default SIPGiftCommon;