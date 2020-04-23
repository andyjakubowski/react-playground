import React from 'react';
import './UnitBox.css';

const UnitBox = function UnitBox(props) {
  return (
    <div className="UnitBox">
      <input
        type="text"
        name={props.unit}
        value={props.value}
        onChange={props.onValueChange}>
      </input>
      <p>Unit: {props.unit}</p>
    </div>
  );
}

export default UnitBox;
