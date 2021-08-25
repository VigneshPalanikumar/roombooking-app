import React, { useState, useEffect } from "react";
import InputTextField from "../Components/TextField/TextField";
import Buttons from "../Components/Button/Button";
import Card from "@material-ui/core/Card";
import axios from "axios";
import { makeStyles, Typography } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  root: {
    margin: "auto",
    marginLeft: 300,
    marginRight: 300,
  },
  card: {
    border: "1px solid grey",
    marginTop: 25,
  },
}));

const ViewBooking = () => {
  const [bookingDetails, setBookingDetails] = useState([]);
  const classes = useStyles();

  useEffect(() => {
    axios({
      method: "GET",
      url: "http://localhost:8080/displaybookings",
    }).then((bookingDetails) => {
      setBookingDetails(bookingDetails.data);
    });
  }, []);

  useEffect(() => {
    console.log(bookingDetails);
  }, [bookingDetails]);

  return (
    <div className={classes.root}>
      {bookingDetails &&
        bookingDetails.map((details) => (
          <Card className={classes.card}>
            <Typography gutterBottom varinat="h6">
              {" "}
              First Name: {details.firstName}
            </Typography>
            <Typography gutterBottom varinat="h6">
              {" "}
              Last Name: {details.lastName}
            </Typography>
            <Typography gutterBottom varinat="h6">
              {" "}
              Booking Date: {details.bookingDate}
            </Typography>
            <Typography gutterBottom varinat="h6">
              {" "}
              Room Number: {details.roomNumber}
            </Typography>
            <Typography gutterBottom varinat="h6">
              {" "}
              Booking Time: {details.bookingTime}
            </Typography>
          </Card>
        ))}
    </div>
  );
};

export default ViewBooking;
