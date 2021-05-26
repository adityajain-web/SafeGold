import React from 'react';
import PartnerLogo from './PartnerData';

const Logo = PartnerLogo.map(item => {
    return (<><div className="col-4 d-flex justify-content-center align-items-center">
        <img className="img-fluid" src={item.logo} key={item.id} alt={`${item.PName} Logo`} />
    </div></>)
})

const Partner = () => {
    return (<>
        <div className="container-fluid my-5">
            <h1 className="font-weight-light text-center">Our Jewellery Partner</h1>
            <div className="row">
                <div className="col-lg-11 col-md-11 mx-auto">
                    <div className="row py-5">
                        {Logo}
                    </div>
                </div>
            </div>
        </div>
    </>)
}

export default Partner;