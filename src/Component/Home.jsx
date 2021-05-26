import React, { useEffect, useState } from 'react';
import GreetText from './GreetText';
import FAQ from './FAQ';
import Box from './Box';

const Home = () => {
    const [Name, setName] = useState("");

    const fetchData = () => {
        const time = new Date().getHours();
        let greetText;
        if (time >= 6 && time < 12) {
            greetText = "Good Morning";
        } else if (time >= 12 && time < 17) {
            greetText = "Good Afternoon";
        } else if (time >= 17 && time < 20) {
            greetText = "Good Evening";
        } else if (time >= 20 && time < 6) {
            greetText = "Good Night";
        }

        const User = prompt(`Hey ${greetText}, What is your good name?`);
        setName(User)
    }

    useEffect(() => {
        document.title = "Digital Gold India | Buy, Sell and Receive Gold | SafeGold";
        fetchData();
    });

    return (<>
        <main>
            <div className="container-fluid my-3">
                <div className="row">
                    <div className="col-md-7 col-12">
                        <GreetText greetText={`Welcome ${Name}`} />
                        <Box />
                    </div>
                    <FAQ />
                </div>
            </div>
        </main>
    </>);
}

export default Home;