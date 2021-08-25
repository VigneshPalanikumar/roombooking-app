import React, { useState } from "react";
import InputTextField from "../Components/TextField/TextField";
import Buttons from "../Components/Button/Button";
import axios from "axios";
import { makeStyles } from "@material-ui/core";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
    justifyContent: "center",
  },
  heading: {
    marginTop: 25,
    marginBottom: 50,
  },
}));

const Booking = () => {
  const history = useHistory();
  const [bookingDetails, setBookingDetails] = useState({
    userId: "",
    firstName: "",
    lastName: "",
    bookingDate: "",
    bookingTime: "",
  });
  const classes = useStyles();

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

  const handleViewBooking = () => {
    history.push("/displaybookings");
  };

  const handleTextBoxChange = (name, e) => {
    setBookingDetails((prevState) => ({
      ...prevState,
      [name]: e.target.value,
    }));

    console.log(e.target.value);
  };

  return (
    <div className={classes.root}>
      <form onSubmit={handleSubmit}>
        <h1 className={classes.heading}> ROOM BOOKING</h1>
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
        <Buttons
          variant="outlined"
          color="secondary"
          label="Display booking"
          onClick={handleViewBooking}
        />
      </form>
    </div>
  );
};

export default Booking;
