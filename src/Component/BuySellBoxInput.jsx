import React from 'react';
import { useLocation } from 'react-router-dom';
import BuySellBoxButton from './BuySellBoxButton';

const BuySellBoxInput = () => {
    const location = useLocation();
    return (<>
        <form>
            <div className="form-group>">
                <input type="number" placeholder="Rs" name="amt" className="form-control bg-transparent border-0 border-bottom shadow-none" id="userInput" autoComplete="off" required />
            </div>
            <BuySellBoxButton btnText={(location.pathname === "/Buy-Gold") ? "Proceed to Buy" : (location.pathname === "/Sell-Gold") ? "Proceed to Sell" : null} />
        </form>
    </>);
}

export default BuySellBoxInput;