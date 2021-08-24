import React, { useState } from "react";
import InputTextField from "../Components/TextField/TextField";
import Buttons from "../Components/Button/Button";
import axios from "axios";

const Booking = () => {
  const [roomNumber] = [300, 301, 302, 303, 304, 305];
  const [time] = ["9:00am"];
  const [bookingDetails, setBookingDetails] = useState({
    userId: "",
    firstName: "",
    lastName: "",
    bookingDate: "",
    bookingTime: "",
  });

  const handleSubmit = () => {
    axios({
      method: "post",
      url: "http://localhost:8080/savebooking",
      data: bookingDetails,
    }).then(() => {
      console.log("Saved");
    });
    console.log("see the value", bookingDetails);
  };

  const handleTextBoxChange = (name, e) => {
    setBookingDetails((prevState) => ({
      ...prevState,
      [name]: e.target.value,
    }));

    console.log(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <InputTextField
        label="First Name"
        variant={"outlined"}
        onChange={(e) => handleTextBoxChange("firstName", e)}
      />{" "}
      <br />
      <InputTextField
        label="Last Name"
        variant={"outlined"}
        onChange={(e) => handleTextBoxChange("lastName", e)}
      />
      <br />
      <InputTextField
        label="Booking Date"
        variant={"outlined"}
        onChange={(e) => handleTextBoxChange("bookingDate", e)}
      />
      <br />
      <InputTextField
        label="Room Number"
        variant={"outlined"}
        onChange={(e) => handleTextBoxChange("roomNumber", e)}
      />
      <br />
      <InputTextField
        label="Booking Time"
        variant={"outlined"}
        onChange={(e) => handleTextBoxChange("bookingTime", e)}
      />{" "}
      <br />
      <Buttons
        variant="outlined"
        color="secondary"
        label="Submit booking"
        onClick={handleSubmit}
      />
    </form>
  );
};

export default Booking;
