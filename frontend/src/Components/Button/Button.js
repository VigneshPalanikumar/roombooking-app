import React from "react";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  root: {
    width: "200px",
    marginTop: "20px",
    margin: "auto",
  },
}));

const Buttons = (props) => {
  const classes = useStyles();

  return (
    <Button
      variant={props.variant}
      color={props.color}
      className={classes.root}
      onClick={props.onClick}
    >
      {" "}
      {props.label}{" "}
    </Button>
  );
};

export default Buttons;
