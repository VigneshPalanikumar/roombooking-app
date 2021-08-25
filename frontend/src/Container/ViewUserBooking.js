import React, { useState } from "react";
import InputTextField from "../Components/TextField/TextField";
import Buttons from "../Components/Button/Button";
import axios from "axios";

const ViewBooking = () => {
  const [bookingDetails, setBookingDetails] = useState([]);

  useState(() => {
    axios({
      method: "GET",
      url: "http://localhost:8080/displaybookings",
    }).then(() => {
      setBookingDetails(bookingDetails);
    });
  }, []);

  return (
    <Card>
      <h1> Hello</h1>
      {bookingDetails &&
        bookingDetails.map(() => {
          <h1> coming</h1>;
        })}
    </Card>
  );
};

export default ViewBooking;
