import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Booking from "../Container/Booking";
import ViewBooking from "../Container/ViewBooking";

class Routes extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Booking} />
          <Route exact path="/displaybookings" component={ViewBooking} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
