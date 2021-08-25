import React, { useState } from "react";
import InputTextField from "../Components/TextField/TextField";
import Buttons from "../Components/Button/Button";
import axios from "axios";
import { makeStyles } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import Autocomplete from "@material-ui/lab/Autocomplete";
import Modal from "@material-ui/core/Modal";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
    justifyContent: "center",
  },
  heading: {
    marginTop: 25,
    marginBottom: 50,
  },
  autoComplete: {
    marginTop: 25,
  },
  modal: {
    background: "black",
  },
}));

const Booking = () => {
  const history = useHistory();
  const roomNumber = [
    "100",
    "102",
    "103",
    "104",
    "105",
    "201",
    "202",
    "203",
    "301",
    "302",
    "303",
    "401",
    "402",
    "403",
  ];

  const [bookingDetails, setBookingDetails] = useState({
    firstName: "",
    lastName: "",
    roomNumber: "",
    bookingDate: "",
    bookingTime: "",
  });
  const [modal, setModal] = useState(false);
  const classes = useStyles();

  const handleSubmit = () => {
    axios({
      method: "post",
      url: "http://localhost:8080/savebooking",
      data: bookingDetails,
    }).then(() => {
      setModal(true);
    });
  };

  const handleViewBooking = () => {
    history.push("/displaybookings");
  };

  const handleTextBoxChange = (name, e) => {
    e.persist();
    setBookingDetails((prevState) => ({
      ...prevState,
      [name]: e.target.value,
    }));
  };

  const handleModalClose = () => {
    setModal(false);
    setBookingDetails({});
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
          type="date"
          onChange={(e) => handleTextBoxChange("bookingDate", e)}
        />
        <br />
        <Autocomplete
          id="combo-box-demo"
          options={roomNumber}
          className={classes.autoComplete}
          getOptionLabel={(option) => option}
          style={{ width: 350 }}
          renderInput={(params) => (
            <TextField
              onChange={(e) => handleTextBoxChange("roomNumber", e)}
              {...params}
              label="Room number"
              variant="outlined"
            />
          )}
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
      <Modal
        className={classes.modal}
        open={modal}
        onClose={handleModalClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <Buttons
          variant="outlined"
          color="secondary"
          label="done"
          onClick={handleModalClose}
        />
      </Modal>
    </div>
  );
};

export default Booking;
