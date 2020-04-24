import React from "react";
import styles from "./UnitBox.module.css";

const UnitBox = function UnitBox(props) {
  return (
    <div className={styles.UnitBox}>
      <input
        type="number"
        name={props.unit}
        className={styles.Field}
        value={props.value}
        onChange={props.onValueChange}
      ></input>
      <p className={styles.UnitLabel}>{props.unit}</p>
    </div>
  );
};

export default UnitBox;
