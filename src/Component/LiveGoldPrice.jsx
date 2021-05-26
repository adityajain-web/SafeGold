import React from 'react';
// import React, { useState } from 'react';
import axios from 'axios';
import GoldBars from './Images/gold-bars.svg'

const LiveGoldPrice = () => {
    // const [price, setPrice] = useState("")

    async function LiveGoldPrice() {
        const res = await axios.get("https://metals-api.com/api/latest?access_key=uybvgvao7c9p5mlg2vm289k4t18o6l12zz9183cp8egpw542p2i6xyu78yr4&base=INR&symbols=XAU").catch(err => console.log(err));

        console.log(res);

        // setPrice((res.data.rates.XAU / 28.3495).toFixed(2))
    }

    setInterval(LiveGoldPrice(), 1000 * 60 * 5)

    return (<>
        <div>
            <img src={GoldBars} alt="Gold Bars" style={{ height: "2.5rem", width: "2.5rem" }} />
            <h2 className="d-inline-block ml-2">Rs.4833.49/gram</h2>
        </div>
    </>);
}

export default LiveGoldPrice;