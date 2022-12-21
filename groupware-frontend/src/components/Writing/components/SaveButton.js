import React from "react";
import classes from "../styles/SaveButton.module.css";

const SaveButton = () => {
  return (
    <div className={classes.container}>
      <button className={classes.SaveButton}>저장</button>
    </div>
  );
};

export default SaveButton;
