import React from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  root: {
    width: "auto",
    marginTop: "25px",
  },
}));

const InputTextField = (props) => {
  const classes = useStyles();

  return (
    <TextField
      required
      label={props.label}
      className={classes.root}
      variant={props.variant}
      defaultValue={props.defaultValue}
      onChange={props.onChange}
    />
  );
};

export default InputTextField;
