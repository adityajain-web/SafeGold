import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Home from './Component/Home';
import Buy from './Component/Buy';
import Sell from './Component/Sell';
import Gift from './Component/Gift';
import Delivery from './Component/Delivery';
import SIP from './Component/SIP';
import Jewellery from './Component/Jewellery';
import Header from './Component/Header';

const App = () => {
  return (<>
    <Header />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/Buy-Gold" component={Buy} />
      <Route exact path="/Sell-Gold" component={Sell} />
      <Route exact path="/Gift" component={Gift} />
      <Route exact path="/Delivery" component={Delivery} />
      <Route exact path="/SIP" component={SIP} />
      <Route exact path="/Jewellery" component={Jewellery} />
      <Redirect to="/" component={Home} />
    </Switch>
  </>);
}

export default App;